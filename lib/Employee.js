class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    gitName(){
        console.log(`Name: ${this.name}`);1
        console.log("-----------");
    }

    gitID() {
        console.log(`ID: ${this.id}`);
        console.log("-----------");
    }

    gitEmail() {
        console.log(`${this.email}`);
        console.log("-----------");
    }

    gitRole() {
        return Employee.join(" ");

    }
    quit() {
        console.log("\nGoodbye!");
        process.exit(0);
      }
}

module.exports = Employee;