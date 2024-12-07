// როლების enum-ი
enum Role {
    Admin = 'Admin',
    User = 'User',
    Guest = 'Guest',
}

// ინტერფეისი IPerson
interface IPerson {
    name: string;
    age: number;
    role: Role;
    introduce(): void;
}

// კლასი Person
class Person implements IPerson {
    name: string;
    age: number;
    role: Role;

    constructor(name: string, age: number, role: Role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }

    introduce() {
        console.log(
            `Hi, my name is ${this.name}, I'm ${this.age} years old, and my role is ${this.role}.`
        );
    }
}

// ობიექტების შექმნა
const person1 = new Person('David', 30, Role.Admin);
person1.introduce(); // Hi, my name is David, I'm 30 years old, and my role is Admin.

const person2 = new Person('Iago', 33, Role.User);
person2.introduce(); // Hi, my name is Iago, I'm 33 years old, and my role is User.

const person3 = new Person('Tommy', 57, Role.Guest);
person3.introduce(); // Hi, my name is Tommy, I'm 57 years old, and my role is Guest.

module.exports = { Person, Role };
