const Person = require('./Person');

class Admin extends Person{
    
    constructor(FirstName, LastName, user, password, Email, PhoneNumber) {
        super(FirstName,LastName,user,password,Email,PhoneNumber);
    }
}
    

module.exports = Admin;