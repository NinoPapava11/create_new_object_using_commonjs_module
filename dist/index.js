"use strict";
// როლების enum-ი
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["User"] = "User";
    Role["Guest"] = "Guest";
})(Role || (Role = {}));
// კლასი Person
var Person = /** @class */ (function () {
    function Person(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }
    Person.prototype.introduce = function () {
        console.log("Hi, my name is ".concat(this.name, ", I'm ").concat(this.age, " years old, and my role is ").concat(this.role, "."));
    };
    return Person;
}());
// ობიექტების შექმნა
var person1 = new Person('David', 30, Role.Admin);
person1.introduce(); // Hi, my name is David, I'm 30 years old, and my role is Admin.
var person2 = new Person('Iago', 33, Role.User);
person2.introduce(); // Hi, my name is Iago, I'm 33 years old, and my role is User.
var person3 = new Person('Tommy', 57, Role.Guest);
person3.introduce(); // Hi, my name is Tommy, I'm 57 years old, and my role is Guest.
module.exports = { Person: Person, Role: Role };
