"use strict";

function solution() {
  class Employee {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.salary = 0;
      this.tasks = [];
    }

    getSalary() {
      return this.salary;
    }

    work() {
      let currentTask = this.tasks.shift();
      this.tasks.push(currentTask);
      console.log(`${this.name} ${currentTask}`);
    }

    collectSalary() {
      console.log(`${this.name} received ${this.getSalary()} this month.`);
    }
  }
  class Junior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks.push(`Is working on a simple task.`);
    }
  }
  class Senior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks.push(`Is working on a complicated task.`);
      this.tasks.push(`Is taking time off work`);
      this.tasks.push(`Is supervising junior workers.`);
    }
  }
  class Manager extends Employee {
    constructor(name, age) {
      super(name, age);
      this.dividend = 0;
      this.tasks.push(`scheduled a meeting.`);
      this.tasks.push(`Is preparing quarterly report.`);
    }

    getSalary() {
      return super.getSalary() + this.dividend;
    }
  }

  return { Employee, Junior, Senior, Manager };
}

const classes = solution();
const junior = new classes.Junior("Ivan", 25);

junior.work();

junior.salary = 5811;
junior.collectSalary();

const senior = new classes.Senior("Alex", 31);

senior.work();
senior.work();
senior.work();
senior.work();

senior.salary = 12050;
senior.collectSalary();

const manager = new classes.Manager("Tom", 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();
