const db = require('./db-connector');

class Gateway{
	static insert_Book(Title, Author, Format, Pages, Publisher, Language, ISBN10, ISBN13,callback) {
        db.getInstance().query(`INSERT INTO book(Title,Author,Format,Pages,Publisher,Language,ISBN10,ISBN13)
        VALUES('${Title}','${Author}','${Format}',
        '${Pages}','${Publisher}','${Language}','${ISBN10}','${ISBN13}')`, function (err, result) {
                if (result.affectedRows) {
                    callback('success');
                }
                else {
                    callback('error');
                }
            });
    }
    static update_Book(Title, Author, Format, Pages, Publisher, Language, ISBN10, ISBN13, id, callback) {
        db.getInstance().query(`UPDATE book SET Title = '${Title}' , Author = '${Author}' , Format = '${Format}',
        Pages = '${Pages}' , Publisher = '${Publisher}' , Language = '${Language}' , ISBN10 = '${ISBN10}' , 
        ISBN13 = '${ISBN13}' WHERE id = '${id}'`, function (err, result) {
                if (result.affectedRows) {
                    callback('success');
                }
                else {
                    callback('error');
                }
            });
    }
    static searchFilter_Book(query, filter, callback) {
        db.getInstance().query(`SELECT id,COUNT(id),Title,Author,Format,Pages,Publisher,Language,ISBN10,ISBN13
         FROM book WHERE Author Like '%${query}%' or Title Like '%${query}%' or
        Publisher Like '%${query}%' or ISBN10 Like '${query}' or ISBN13 Like '${query}' 
        GROUP BY Title,Author,Format,Pages,Publisher,Language,ISBN10,ISBN13 
        ORDER BY ${filter}`, function (err, result) {
                if (result.length > 0)
                    callback('success', result);
                else
                    callback('error', null);
            })
    }
}

module.exports = Gateway;