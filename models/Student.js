const Person = require('./Person');

class Student extends Person{
    
    constructor(FirstName, LastName, UserName, Password, Email, PhoneNumber) {
        super(FirstName,LastName,UserName,Password,Email,PhoneNumber);
    } 
}

module.exports = Student;

