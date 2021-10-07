class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
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
    getSchool() {
        console.log(`School: ${this.school}`);
        console.log("-----------");
    }
    getRole() {
        return Intern
    }
}