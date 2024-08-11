class User {
    private name!: string;
    private email!: string;
    private password!: string;

    constructor(name: string, email: string, password: string){

        this.name = "";
        this.email = "";
        this.password = "";
    }
}

export {User}