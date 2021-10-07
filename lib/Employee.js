class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    gitName(){
        console.log(`Name: ${this.name}`);
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
}

module.exports = Employee;