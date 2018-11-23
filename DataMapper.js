const models = require('./models');
const gateway = require('./Gateway');

class DataMapper {


    static viewActiveUsers(callback) {
        gateway.viewUsers(function (type, result) {
            if (type === 'success') {
                callback('success', result);
            }
            else
                callback('error', null);
        })
    }

    static login_Admin(user, password, callback) {
        const admin = new models.Admin(null, null, user, password, null, null);
        gateway.login_Admin(admin.getUserName(), admin.getPassword(), function (type) {
            if (type === 'success')
                callback('success');
            else if (type === 'error')
                callback('error');
            else
                callback('error1');
        });
    }

    static insert_Admin(FirstName, LastName, user, password, Email, PhoneNumber, callback) {
        const admin = new models.Admin(FirstName, LastName, user,
            password, Email, PhoneNumber);

        gateway.insert_Admin(admin.getFirstName(), admin.getLastName(), admin.getUserName(), admin.getPassword(),
            admin.getEmail(), admin.getPhoneNumber(), function (type) {
                if (type === 'errorduplicate') {
                    callback('errorduplicate');
                }
                else if (type === 'success') {
                    callback('success')
                }
                else
                    callback('error');
            });
    }

     static insert_Student(FirstName, LastName, UserName, Password, Email, PhoneNumber, callback) {
        const student = new models.Student(FirstName, LastName, UserName, Password, Email, PhoneNumber);

        gateway.insert_Student(student.getFirstName(), student.getLastName(), student.getUserName(), student.getPassword(),
            student.getEmail(), student.getPhoneNumber(), function (type) {
                if (type === 'success')
                    callback('success');
                else if (type === 'error')
                    callback('error');
                else
                    callback('errorunique');
            });
    }

    static login_Student(UserName, Password, callback) {
        const student = new models.Student(null, null, UserName, Password, null, null);

        gateway.login_Student(student.getUserName(), student.getPassword(), function (type) {
            if (type === 'success')
                callback('success');
            else if (type === 'error')
                callback('error');
            else
                callback('error1');
        })
    
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
	
	static create_Music(Type, Title, Artist, Label, Release_Date, ASIN, callback) {
        const music = new models.Music(Type, Title, Artist, Label, Release_Date, ASIN, null);
        gateway.insert_Music(music.getType(), music.getTitle(), music.getArtist(), music.getLabel(), music.getRelease_Date(),
            music.getASIN(), function (type) {
                if (type === 'success')
                    callback('success');
                else
                    callback('error');
            })
    }


 
    static delete(entry, id, callback) {
        gateway.delete(entry, id, function (type) {
            if (type === 'success') {
                callback('success')
            }
            else
                callback('error');
        });
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
	
	static update_Music(Type, Title, Artist, Label, Release_Date, ASIN, id, callback) {
        const music = new models.Music(Type, Title, Artist, Label, Release_Date, ASIN, id);

        gateway.update_Music(music.getType(), music.getTitle(), music.getArtist(), music.getLabel(),
            music.getRelease_Date(), music.getASIN(), music.getID(), function (type) {
                if (type === 'success')
                    callback('success');
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
	
	static searchFilter_Music(query,filter,callback){
        gateway.searchFilter_Music(query, filter, function (type, result) {
            if (type === 'success')
                callback('success',result);
            else
                callback('error',null);
        })
    }
}

module.exports = DataMapper;