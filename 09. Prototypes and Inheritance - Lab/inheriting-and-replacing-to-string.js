"use strict";

function inheritingAndReplacingToString() {
  return {
    Person,
    Teacher,
    Student,
  };
}

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  toString() {
    return `Person (name: ${this.name} email: ${this.email})`;
  }
}

class Teacher extends Person {
  constructor(name, email, subject) {
    super(name, email);
    this.subject = subject;
  }
  toString() {
    return `Teacher (name: ${this.name} email: ${this.email} subject: ${this.subject})`;
  }
}

class Student extends Person {
  constructor(name, email, course) {
    super(name, email);
    this.course = course;
  }
  toString() {
    return `Student (name: ${this.name} email: ${this.email} course: ${this.course})`;
  }
}

let person = new Person("Ivo", "Kenov@gmail.com");
console.log(`Person: ${person.name} ${person.email}`);

let teacher = new Teacher("Ken", "Ivaylov@gmail.com", "Ambitioned");
console.log(`Teacher: ${teacher.name} ${teacher.email} ${teacher.subject}`);

let student = new Student("Nick", "Kenov@gmail.com", "Ambition");
console.log(`Student: ${student.name} ${student.email} ${student.course}`);

person.toString();
