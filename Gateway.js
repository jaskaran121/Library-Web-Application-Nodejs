const db = require('./db-connector');

class Gateway{
    static insert_Admin(FirstName,LastName,user,password,Email,PhoneNumber,callback) {
        db.getInstance().query(`INSERT INTO person(FirstName,LastName,UserName,Password,Email,PhoneNumber,Discriminator)
        VALUES('${FirstName}','${LastName}','${user}',
        '${password}','${Email}','${PhoneNumber}',"A")`, function (err, result) {
        if(err)
        {
            callback('errorduplicate');
        }
        else{
            if (result.affectedRows) {
                callback('success')
            }
            else
                callback('error');
        }
        });         
    }
    static login_Admin(user, password,callback) {
        db.getInstance().query(`SELECT * FROM person WHERE UserName = '${user}' AND Discriminator = "A"`
        , function (err, result) {
            if (result.length > 0) {
                if (result[0].Password === password)
                    callback('success');
                else
                    callback('error')
            }
            else
                callback('error1');
        });
    }

    static viewUsers(callback) {
        
        db.getInstance().query(`SELECT * FROM person WHERE Discriminator = 'S'`
        , function (err, result) {
           if (result.length > 0) {
                callback('success', result);
            }
            else {
                console.log(error);
                callback('error', null);
            }
        })
    }

    static insert_Student(FirstName,LastName,UserName,Password,Email,PhoneNumber,callback) {
        
        db.getInstance().query(`INSERT INTO person(FirstName,LastName,UserName,Password,Email,PhoneNumber,Discriminator)
           VALUES('${FirstName}','${LastName}','${UserName}',
           '${Password}','${Email}','${PhoneNumber}','S')`, function (err, result) {
               
                if (err) {
                    callback('errorunique');
                }
                else {
                    if (result.affectedRows) {
                        callback('success');
                    }
                    else {
                        callback('error');
                    }
                }
            });
    }

    static login_Student(UserName, Password,callback) {
        db.getInstance().query(`SELECT * FROM person where UserName='${UserName}' AND Discriminator = 'S'
        `, function (err, res) {
            if (res.length > 0) {
                if (res[0].Password === Password)
                    callback('success');
                else
                    callback('error');
            }
            else
                callback('error1');
        });
    }

	static insert_Book(Title, Author, Format, Pages, Publisher, Language, ISBN10, ISBN13,callback) {
        db.getInstance().query(`INSERT INTO book(Title,Author,Format,Pages,Publisher,Language,ISBN10,ISBN13)
        VALUES('${Title}','${Author}','${Format}',
        '${Pages}','${Publisher}','${Language}','${ISBN10}','${ISBN13}')`, function (err, result) {
                if (result.affectedRows) {
                    callback('success');
                }
                else {
                    callback('error');
                }
            });
    }

    static insert_Magazine(Title, Language, Publisher, ISBN10, ISBN13, callback) {
        db.getInstance().query(`INSERT INTO magazine(Title,Language,Publisher,ISBN10,ISBN13)
        VALUES('${Title}','${Language}','${Publisher}',
        '${ISBN10}','${ISBN13}')`, function (err, result) {
                if (result.affectedRows) {
                    callback('success');
                }
                else {
                    callback('error');
                }
            });
    }
	static insert_Movie(Title,Director,Producers,Actors,Language,Subtitles,Dubbed,Release_Date,Run_Time,callback) {
    
        db.getInstance().query(`INSERT INTO movie(Title,Director,Producers,Actors,Language,Subtitles,Dubbed,Release_Date,Run_Time)
        VALUES('${Title}','${Director}','${Producers}',
        '${Actors}','${Language}','${Subtitles}','${Dubbed}','${Release_Date}','${Run_Time}'
        )`, function (err, result) {
                if (result.affectedRows) {
                    callback('success');
                }
                else {
                    callback('error');
                }
            });
    }

    static show(entry,callback) {

        db.getInstance().query(`SELECT * FROM ${entry}`, function (err, result) {
            if (result.length > 0) {
                callback('success', result)
            }
            else
                callback('error',null);
        });
    }
    
    static delete(entry,id, callback) {
        db.getInstance().query(`DELETE FROM ${entry} WHERE id = ${id}`, function (err, result) {
            console.log(err);
            if (result.affectedRows) {
                callback('success');
            }
            else
                callback('error');
        });
    }


	static insert_Music(Type,Title,Artist,Label,Release_Date,ASIN,callback) {

        db.getInstance().query(`INSERT INTO music(Type,Title,Artist,Label,Release_Date,ASIN) VALUES
        ('${Type}','${Title}','${Artist}','${Label}','${Release_Date}','${ASIN}')`, function (err, result) {
                if (result.affectedRows) {
                    callback('success');
                }
                else {
                    callback('error');
                }
            });
    }
	
    static update_Book(Title, Author, Format, Pages, Publisher, Language, ISBN10, ISBN13, id, callback) {
        db.getInstance().query(`UPDATE book SET Title = '${Title}' , Author = '${Author}' , Format = '${Format}',
        Pages = '${Pages}' , Publisher = '${Publisher}' , Language = '${Language}' , ISBN10 = '${ISBN10}' , 
        ISBN13 = '${ISBN13}' WHERE id = '${id}'`, function (err, result) {
                if (result.affectedRows) {
                    callback('success');
                }
                else {
                    callback('error');
                }
            });
    }

    static update_Magazine(Title, Language, Publisher, ISBN10, ISBN13, id, callback) {
        db.getInstance().query(`UPDATE magazine SET Title = '${Title}' , Language = '${Language}' , 
        Publisher = '${Publisher}' , ISBN10 = '${ISBN10}' , ISBN13 = '${ISBN13}'
        WHERE id = '${id}'`, function (err, result) {
                if (result.affectedRows) {
                    callback('success');
                }
                else {
                    callback('error');
                }

            });
    }
	static update_Movie(Title, Director, Producers, Actors, Language, Subtitles, Dubbed, Release_Date, Run_Time,id,callback)
    {
        db.getInstance().query(`UPDATE movie SET Title = '${Title}' , Language = '${Language}' , 
        Director = '${Director}' , Producers = '${Producers}' , Actors = '${Actors}' ,
        Subtitles = '${Subtitles}' , Dubbed ='${Dubbed}' , Release_Date = '${Release_Date}' , 
        Run_Time = '${Run_Time}' WHERE id = '${id}'`,function(err,result)
        {
            if(result.affectedRows)
            {
                callback('success');
            }
            else
            callback('error');
        })
    }
	
	static update_Music(Type, Title, Artist, Label, Release_Date, ASIN,id,callback)
    {
        db.getInstance().query(`UPDATE music SET Title = '${Title}' , Type = '${Type}' , 
        Artist = '${Artist}' , Release_Date = '${Release_Date}' , 
        ASIN = '${ASIN}' WHERE id = '${id}'`,function(err,result)
        {
            if(result.affectedRows)
            {
                callback('success');
            }
            else
            callback('error');
        })
    }
	
    static searchFilter_Book(query, filter, callback) {
        db.getInstance().query(`SELECT id,COUNT(id),Title,Author,Format,Pages,Publisher,Language,ISBN10,ISBN13
         FROM book WHERE Author Like '%${query}%' or Title Like '%${query}%' or
        Publisher Like '%${query}%' or ISBN10 Like '${query}' or ISBN13 Like '${query}' 
        GROUP BY Title,Author,Format,Pages,Publisher,Language,ISBN10,ISBN13 
        ORDER BY ${filter}`, function (err, result) {
                if (result.length > 0)
                    callback('success', result);
                else
                    callback('error', null);
            })
    }

    static searchFilter_Magazine(query, filter, callback) {
        console.log(filter);
        db.getInstance().query(`SELECT id,COUNT(id),Title,Language,Publisher,ISBN10,ISBN13 FROM magazine WHERE Title Like '%${query}%' or Language Like '${query}' or
        Publisher Like '%${query}%' or ISBN10 Like '${query}' or ISBN13 Like '${query}' 
        GROUP BY Title,Language,Publisher,ISBN10,ISBN13
        ORDER BY ${filter}`, function (err, result) {
                if (result.length > 0)
                    callback('success', result);
                else
                    callback('error', null);
            })
    }

	static searchFilter_Music(query,filter,callback)
    {
        db.getInstance().query(`SELECT id,COUNT(id),Type,Title,Artist,Label,Release_Date,ASIN
         FROM music WHERE Title Like '%${query}%' or
        Type Like '${query}' or Artist Like '%${query}%' or Label Like '${query}' or Release_Date Like '${query}' or ASIN Like '${query}'
        GROUP BY Type,Title,Artist,Label,Release_Date,ASIN
        ORDER BY ${filter}`,function(err,result){
            if(result.length>0)
            callback('success',result);
            else
            callback('error',null);
        })
    }
	static searchFilter_Movie(query,filter,callback)
    {
        db.getInstance().query(`SELECT id,COUNT(id),Title,Director,Producers,Actors,Language,Subtitles,Dubbed,Release_Date,Run_Time
         FROM movie WHERE Title Like '%${query}%' or Director Like '%${query}%' or Producers Like '%${query}%'
        or Actors Like '%${query}%' or Language Like '${query}' or Dubbed Like '${query}' or Subtitles Like '${query}'
        or Release_Date Like '%${query}%' or Run_Time Like '%${query}%' 
        GROUP BY Title,Director,Producers,Actors,Language,Subtitles,Dubbed,Release_Date,Run_Time
        ORDER BY ${filter}`,function(err,result){
            if(result.length>0)
            callback('success',result);
            else
            callback('error',null);
        })
    }
	
}

module.exports = Gateway;
