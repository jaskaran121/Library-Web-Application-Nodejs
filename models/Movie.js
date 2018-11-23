const MediaItem = require('./MediaItem');

class Movie extends MediaItem{
    constructor(Title,Director,Producers,Actors,Language,Subtitles,Dubbed,Release_Date,Run_Time,id){
        super(Title,Release_Date,id);
        this.Director = Director;
        this.Producers =Producers;
        this.Actors=Actors;
        this.Language=Language;
        this.Subtitles=Subtitles;
        this.Dubbed=Dubbed;
        this.Run_Time = Run_Time;
    }
    
     getDirector()
    {
        return this.Director;
    }
    getProducers()
    {
        return this.Producers;
    }
    getActors()
    {
        return this.Actors;
    }
    getLanguage()
    {
        return this.Language;
    }
    getSubtitles()
    {
        return this.Subtitles;
    }
    getDubbed()
    {
        return this.Dubbed;
    }
    getRun_Time()
    {
        return this.Run_Time;
    }

   
}
module.exports = Movie;
