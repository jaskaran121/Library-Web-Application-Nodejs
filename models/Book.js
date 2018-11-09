const db = require('../db-connector');

class Book {
    constructor(Title,Author,Format,Pages,Publisher,Language,ISBN10,ISBN13) {
        this.Title = Title;
        this.Author =Author;
        this.Format=Format;
        this.Pages = Pages;
        this.Publisher=Publisher;
        this.Language=Language;
        this.ISBN10=ISBN10;
        this.ISBN13=ISBN13;
    }

    bookInfo() {
        return {
            Title:this.Title,
            Author:this.Author,
            Format:this.Format,
            Pages:this.Pages,
            Publisher:this.Publisher,
            Language:this.Language,
            ISBN10:this.ISBN10,
            ISBN13:this.ISBN13
        };
    }
//Callback function-it is basically a arguement provided to a function which is called upon the execution of the function.
    insert(callback) {
        db.getInstance().query(`INSERT INTO book(Title,Author,Format,Pages,Publisher,Language,ISBN10,ISBN13)
        VALUES('${this.Title}','${this.Author}','${this.Format}',
        '${this.Pages}','${this.Publisher}','${this.Language}','${this.ISBN10}','${this.ISBN13}')`, function (err, result) {
            if (result.affectedRows) {
                callback('success');
            }
            else {
                callback('error');
            }
        });
    }
    
    static show(entry,callback)
    {
        
        db.getInstance().query(`SELECT * FROM ${entry}`,function(err,result){
            if(result.length>0)
            {
                callback('success',result)
            }
            else
            callback('error')
        });
    }


    static delete(entry,id,callback){
        db.getInstance().query(`DELETE FROM ${entry} WHERE id = ${id}`,function(err,result){
        if(result.affectedRows)
        {
            callback('success');
        }
        else
        callback('error');
        });
    }

    static search(query,callback)
    {
         db.getInstance().query(`SELECT * FROM book WHERE Author Like '%${query}%' or Title Like '%${query}%' or
         Publisher Like '%${query}%' or ISBN10 Like '${query}' or ISBN13 Like '${query}'`,function(err,result){
            if(result.length>0)
            callback('success',result);
            else
            callback('error',null);
         });
    }
}

module.exports = Book;