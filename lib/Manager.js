class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
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
    getofficeNumber() {
        console.log(`Office Number: ${this.officeNumber}`)
    }
    getRole() {
        return 
    }


    
}

module.exports = Manager;