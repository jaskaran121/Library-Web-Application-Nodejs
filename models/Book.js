const PrintedItem = require('./PrintedItem');

class Book extends PrintedItem {
    constructor(Title, Author, Format, Pages, Publisher, Language, ISBN10, ISBN13, id) {
        super(Title, Publisher, Language, ISBN10, ISBN13, id);
        this.Author = Author;
        this.Format = Format;
        this.Pages = Pages;
    }

getAuthor()
{
    return this.Author;
}

getFormat()
{
    return this.Format;
}
getPages()
{
    return this.Pages;
}

}

module.exports = Book;
