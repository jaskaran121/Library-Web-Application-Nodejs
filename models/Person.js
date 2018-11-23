class Person{
    constructor(FirstName, LastName, UserName, Password, Email, PhoneNumber) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.UserName = UserName;
        this.Password = Password;
        this.Email = Email;
        this.PhoneNumber = PhoneNumber
    }

    getFirstName() {
        return this.FirstName;
    }

    getLastName() {
        return this.LastName;
    }

    getUserName() {
        return this.UserName;
    }

    getPassword()
    {
        return this.Password;
    }

    getEmail()
    {
        return this.Email;
    }

    getPhoneNumber()
    {
        return this.PhoneNumber;
    }

    getDiscriminator()
    {
        return this.Discriminator;
    }
}

module.exports = Person;