declare enum Role {
    Admin = "Admin",
    User = "User",
    Guest = "Guest"
}
interface IPerson {
    name: string;
    age: number;
    role: Role;
    introduce(): void;
}
declare class Person implements IPerson {
    name: string;
    age: number;
    role: Role;
    constructor(name: string, age: number, role: Role);
    introduce(): void;
}
declare const person1: Person;
declare const person2: Person;
declare const person3: Person;
