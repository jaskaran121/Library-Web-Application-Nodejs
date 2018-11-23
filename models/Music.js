const MediaItem = require('./MediaItem');

class Music extends MediaItem{
    constructor(Type, Title, Artist, Label, Release_Date, ASIN,id) {
        super(Title,Release_Date,id);
        this.Type = Type;
        this.Artist = Artist;
        this.Label = Label;
        this.ASIN = ASIN;
    }
   getType()
   {
       return this.Type;
   }
   getArtist(){
       return this.Artist;
   }
   getLabel()
   {
       return this.Label;
   }
   getASIN()
   {
       return this.ASIN;
   }

}
module.exports = Music;