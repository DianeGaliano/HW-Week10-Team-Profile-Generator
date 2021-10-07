const Employee = require("./Employee");

class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
    getName() {
        console.log(`Name: ${this.name}`);1
        console.log("-----------");
    }
    getID() {
        console.log(`ID: ${this.id}`);
        console.log("-----------");
    }
    getEmail() {
        console.log(`${this.email}`);
        console.log("-----------");
    }
    getGithub() {
        console.log(`GitHub: ${this.github}`);
        console.log("-----------");
    }
    getRole() {
        return Engineer;
    }
}

module.exports = Engineer;