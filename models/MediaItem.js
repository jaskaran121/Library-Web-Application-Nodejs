class MediaItem{

    constructor(Title,Release_Date,id)
    {
        this.Title = Title;
        this.Release_Date = Release_Date;
        this.id = id;
    }
getID()
{
    return this.id;
}
    getTitle()
    {
        return this.Title;
    }
    setTitle()
    {
        Title = this.Title;
    }

    getRelease_Date()
    {
        return this.Release_Date;
    }

    setRelease_Date()
    {
       Release_Date =  this.Release_Date;
    }
}

module.exports = MediaItem;