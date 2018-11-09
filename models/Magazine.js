const db = require('../db-connector');

class Magazine{
    constructor(Title,Language,Publisher,ISBN10,ISBN13)
    {
        this.Title = Title;
        this.Language = Language;
        this.Publisher = Publisher;
        this.ISBN10 = ISBN10;
        this.ISBN13 =ISBN13;
    }
    magazineInfo(){
        return{
            Title:this.Title,
            Language:this.Language,
            Publisher:this.Publisher,
            ISBN10:this.ISBN10,
            ISBN13:this.ISBN13
        }
    }

    insert(callback)
    {
        db.getInstance().query(`INSERT INTO magazine(Title,Language,Publisher,ISBN10,ISBN13)
        VALUES('${this.Title}','${this.Language}','${this.Publisher}',
        '${this.ISBN10}','${this.ISBN13}')`, function (err, result) {
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
        callback('success');
        }
        else
        callback('error');
        });
    }

    static delete(entry,id,callback)
    {
        db.getInstance().query(`DELETE * FROM ${entry} WHERE id = '${id}'`,function(err,result){
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
         db.getInstance().query(`SELECT * FROM magazine WHERE Title Like '%${query}%' or Language Like '${query}' or
         Publisher Like '%${query}%' or ISBN10 Like '${query}' or ISBN13 Like '${query}'`,function(err,result){
            if(result.length>0)
            callback('success',result);
            else
            callback('error',null);
         });
    }
}

module.exports = Magazine;