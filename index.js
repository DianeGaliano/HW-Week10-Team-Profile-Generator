const inquirer = require("inquirer");
const fs = require("fs");


//Constructor Function for 
function Developer(name, employeeID, email, number ) {
  this.name = name;
  this.employeeID = employeeID;
  this.email = email;
  this.number = number;  
}

const teamManager = new Developer("teamManager", "JavaScript");

Developer.prototype.printInfo = function () {
    console.log(
        `Name: ${this.name}\nID: ${this.employeeID}\nEmail: ${this.email}`
    );
    
}