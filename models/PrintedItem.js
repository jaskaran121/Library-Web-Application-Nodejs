const db = require('../db-connector');

class PrintedItem{
    constructor(Title,Publisher,Language,ISBN10,ISBN13,id)
    {
        this.Title = Title;
        this.Publisher =Publisher;
        this.Language = Language;
        this.ISBN10 = ISBN10;
        this.ISBN13 = ISBN13;
        this.id = id;
    }
    getTitle()
    {
        return this.Title;
    }
    setTitle(Title)
    {
         this.Title = Title;
    }

    getPublisher()
    {
        return this.Publisher;
    }
    setPublisher(Publisher)
    {
        this.Publisher = Publisher;
    }
    getLanguage()
    {
      return this.Language;
    }
    setLanguage(Language)
    {
        this.Language = Language;
    }
    getISBN10()
    {
        return this.ISBN10;
    }
    setISBN10(ISBN10)
    {
        this.ISBN10 = ISBN10;
    }

    getISBN13()
    {
       return this.ISBN13;
    }
    setISBN13(ISBN13)
    {
        this.ISBN13 = ISBN13;
    }
    getID()
    {
        return this.id;
    }
}

module.exports = PrintedItem;
