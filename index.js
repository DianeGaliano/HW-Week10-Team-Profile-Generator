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

function Engineer(name, iD, email, gitHub) {
    this.name = name;
    this.iD = iD;
    this.email = email;
    this.gitHub = gitHub; 
}

Engineer.prototype.printEngineer = function () {
    console.log(
        `Name: ${this.name}\nID: ${this.employeeID}\nEmail: ${this.email}\nGitHub: ${this.gitHub}`
    );
    console.log("\n---------------\n");
};

function Intern(name, iD, email, school) {
    this.name = name;
    this.iD = iD;
    this.email = email;
    this.school = school;
}

Intern.prototype.printIntern = function () {
    console.log(
        `Name: ${this.name}\nID: ${this.employeeID}\nEmail: ${this.email}\nSchool: ${this.school}`
    );
    console.log("\n---------------\n");
};