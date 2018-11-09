const db = require('../db-connector');

class Student{
   constructor(FirstName,LastName,UserName,Password,Email,PhoneNumber){
      this.FirstName = FirstName;
      this.LastName = LastName;
      this.UserName = UserName;
      this.Password = Password;
      this.Email = Email;
      this.PhoneNumber = PhoneNumber
    }

    student_Info()
    {
        return{
            FirstName:this.FirstName,
            LastName:this.LastName,
            UserName:this.UserName,
            Password:this.LastName,
            Email:this.Email,
            PhoneNumber:this.PhoneNumber
        }
    }

    insert(callback)
    {
           db.getInstance().query(`INSERT INTO students(FirstName,LastName,UserName,Password,Email,PhoneNumber)
           VALUES('${this.FirstName}','${this.LastName}','${this.UserName}',
           '${this.Password}','${this.Email}','${this.PhoneNumber}')`,function(err,result){
               if(result.affectedRows)
               {
                   callback('success');
               }
               else{
                   callback('error');
               }
           });
    }

    static login(user,password,callback)
{
db.getInstance().query(`SELECT * FROM students where UserName='${user}'`,function(err,res){
    if(res.length>0){
        if(res[0].Password===password)
        callback('success');
        else
        callback('error');
    }
    else
    callback('error1');
});
}  
}

module.exports = Student;

    