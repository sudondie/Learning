console.log('suka');
class Person {
    constructor(name,email,birthyear) {
        this.name = name;
        this.email = email;
        this.birthyear = birthyear;
    }
    returnBirthYear () {
        return this.birthyear;
    }
}
let Ilia = new Person("Ilia","ilia.skakov@gmail.com",1999);
console.log(Ilia);
class PersonExt extends Person {
    constructor(surname,name,email,birthyear) {
        super(name,email,birthyear);
        this.surname = surname;
    }
}
let iliaNickname = new PersonExt("sudondie","Ilia","ilia.skakov@gmail.com",1999);
console.log(iliaNickname);