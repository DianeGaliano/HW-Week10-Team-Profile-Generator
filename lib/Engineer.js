class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getGithub() {
        console.log(`GitHub: ${this.github}`);
        console.log("-----------");
    }
}