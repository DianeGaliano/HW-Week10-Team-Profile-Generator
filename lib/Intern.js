class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    getSchool() {
        console.log(`School: ${this.school}`);
        console.log("-----------");
    }
}