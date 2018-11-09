const db = require('../db-connector');

class Movie{
    constructor(Title,Director,Producers,Actors,Language,Subtitles,Dubbed,Release_Date,Run_Time){
        this.Title = Title;
        this.Director = Director;
        this.Producers =Producers;
        this.Actors=Actors;
        this.Language=Language;
        this.Subtitles=Subtitles;
        this.Dubbed=Dubbed;
        this.Release_Date=Release_Date;
        this.Run_Time = Run_Time;
    }

    movie_Info()
    {
        return{
            Title:this.Title,
            Director:this.Director,
            Producers:this.Producers,
            Actors:this.Actors,
            Language:this.Language,
            Subtitles:this.Subtitles,
            Dubbed:this.Dubbed,
            Release_Date:this.Release_Date,
            Run_Time:this.Run_Time
        }
    }

    insert(callback)
    {
        db.getInstance().query(`INSERT INTO movie(Title,Director,Producers,Actors,Language,Subtitles,Dubbed,Release_Date,Run_Time)
        VALUES('${this.Title}','${this.Director}','${this.Producers}',
        '${this.Actors}','${this.Language}','${this.Subtitles}','${this.Dubbed}','${this.Release_Date}','${this.Run_Time}'
        )`, function (err, result) {
            if (result.affectedRows) {
                callback('success');
            }
            else {
                callback('error');
            }
        });
}

static search(query,callback)
    {
         db.getInstance().query(`SELECT * FROM movie WHERE Title Like '%${query}%' or Director Like '%${query}%' or Producers Like '%${query}%'
         or Actors Like '%${query}%' or Language Like '${query}' or Dubbed Like '${query}' or Subtitles Like '${query}'
         or Release_Date Like '%${query}%' or Run_Time Like '%${query}%'`,function(err,result){
            if(result.length>0)
            callback('success',result);
            else
            callback('error',null);
         });
    }
}
module.exports = Movie;