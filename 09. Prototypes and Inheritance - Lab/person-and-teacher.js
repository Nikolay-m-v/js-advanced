"use strict";

function personAndTeacher() {
  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email);
      this.subject = subject;
    }
  }

  return {
    Person,
    Teacher,
  };
}

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class Teacher extends Person {
  constructor(name, email, subject) {
    super(name, email);
    this.subject = subject;
  }
}

let person = new Person("Ivo", "Kenov@gmail.com");
console.log(`Person: ${person.name} ${person.email}`);

let teacher = new Teacher("Ken", "Ivaylov@gmail.com", "Ambitioned");
console.log(`Teacher: ${teacher.name} ${teacher.email} ${teacher.subject}`);
