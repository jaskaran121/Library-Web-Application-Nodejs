const models = require('./models');
const gateway = require('./Gateway');

class DataMapper {
	static create_Book(Title, Author, Format, Pages, Publisher, Language, ISBN10, ISBN13, callback) {
        const book = new models.Book(Title, Author, Format, Pages, Publisher, Language, ISBN10, ISBN13, null);
        gateway.insert_Book(book.getTitle(), book.getAuthor(), book.getFormat(), book.getPages(), book.getPublisher(),
            book.getLanguage(), book.getISBN10(), book.getISBN13(), function (type) {
                if (type === 'success')
                    callback('success');
                else
                    callback('error');
            })
    }

    static update_Book(Title, Author, Format, Pages, Publisher, Language, ISBN10, ISBN13, id, callback) {
        const book = new models.Book(Title, Author, Format, Pages, Publisher, Language, ISBN10, ISBN13, id);

        gateway.update_Book(book.getTitle(), book.getAuthor(), book.getFormat(), book.getPages(), book.getPublisher(),
            book.getLanguage(), book.getISBN10(), book.getISBN13(), book.getID(), function (type) {
                if (type === 'success') {
                    callback('success');
                }
                else
                    callback('error');
            })
    }

    static searchFilter_Book(query, filter, callback) {
        gateway.searchFilter_Book(query, filter, function (type, result) {
            if (type === 'success')
                callback('success',result);
            else
                callback('error',null);
        })
    }
}

module.exports = DataMapper;