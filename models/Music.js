const db = require('../db-connector');

class Music{
    constructor(Type,Title,Artist,Label,Release_Date,ASIN){
        this.Type = Type;
        this.Title = Title;
        this.Artist = Artist;
        this.Label = Label;
        this.Release_Date = Release_Date;
        this.ASIN = ASIN;
    }
    music_Info()
    {
        return{
            Type:this.Type,
            Title:this.Title,
            Artist:this.Artist,
            Label:this.Label,
            Release_Date:this.Release_Date,
            ASIN:this.ASIN
        }
    }

    insert(callback)
    {
        db.getInstance().query(`INSERT INTO music(Type,Title,Artist,Label,Release_Date,ASIN) VALUES
        ('${this.Type}','${this.Title}','${this.Artist}','${this.Label}','${this.Release_Date}','${this.ASIN}')`,function(err,result){
            if(result.affectedRows){
                callback('success');
            }
            else
            {
                callback('error');
            }
        });
    }

    static search(query,callback)
    {
         db.getInstance().query(`SELECT * FROM music WHERE Title Like '%${query}%' or
         Type Like '${query}' or Artist Like '%${query}%' or Label Like '${query}' or Release_Date Like '${query}'
         or ASIN Like '${query}'`,function(err,result){
            if(result.length>0)
            callback('success',result);
            else
            callback('error',null);
         });
    }
}
module.exports = Music;