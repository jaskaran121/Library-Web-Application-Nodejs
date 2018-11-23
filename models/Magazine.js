const PrintedItem = require('./PrintedItem');
class Magazine extends PrintedItem{
    constructor(Title, Language, Publisher, ISBN10, ISBN13,id) {
        super(Title, Language, Publisher, ISBN10, ISBN13,null);
    }
    
}

module.exports = Magazine;