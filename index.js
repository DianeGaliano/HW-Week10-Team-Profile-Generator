const inquirer = require("inquirer");
const fs = require("fs");


//Constructor Function for 
function Manager(name, employeeID, email, number ) {
  this.name = name;
  this.iD = iD;
  this.email = email;
  this.number = number;  
}

const teamManager = new Developer("teamManager", "JavaScript");

Manager.prototype.printInfo = function () {
    console.log(
        `Name: ${this.name}\nID: ${this.employeeID}\nEmail: ${this.email}\nOffice Number: ${this.number}`
    );
    console.log("\n---------------\n");
};

function Employees(name, iD, email, number) {
    this.name = name;
    this.iD = iD;
    this.email = email;
    this.number = number; 
}

Employees.prototype.printEmployee = function () {
    console.log(
        `Name: ${this.name}\nID: ${this.employeeID}\nEmail: ${this.email}\nOffice Number: ${this.number}`
    );
    console.log("\n---------------\n");
};