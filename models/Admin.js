const db = require('../db-connector');

class Admin{
constructor(FirstName,LastName,user,password,Email,PhoneNumber){
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.user = user;
    this.password = password;
    this.Email = Email;
    this.PhoneNumber = PhoneNumber
}

admin_Info()
{
    return{
        FirstName:this.FirstName,
        LastName:this.LastName,
        user:this.user,
        password:this.password,
        Email:this.Email,
        PhoneNumber:this.PhoneNumber
    }
}

insert(callback){
    db.getInstance().query(`INSERT INTO users(FirstName,LastName,user,password,Email,PhoneNumber)
    VALUES('${this.FirstName}','${this.LastName}','${this.user}',
    '${this.password}','${this.Email}','${this.PhoneNumber}')`,function(err,result){
        if(result.affectedRows){
            callback('success')
        }
        else
        callback('error');
    });
}

static login(user,password,callback)
{
db.getInstance().query(`SELECT * FROM users WHERE user = '${user}'`,function(err,result){
    if(result.length>0){
        if(result[0].password===password)
        callback('success');
        else
        callback('error')
    }
    else
    callback('error1');
});
}

static viewUsers(callback)
{
db.getInstance().query(`SELECT * FROM students`,function(err,result){
    if(result.length>0)
    {
        callback('success',result);
    }
    else{
        callback('error',null);
    }
})
}
}

module.exports = Admin;