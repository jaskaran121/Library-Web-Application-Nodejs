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

   
}
module.exports = Movie;
