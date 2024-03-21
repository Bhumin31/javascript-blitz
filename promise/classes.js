class User{
    constructor(username,mail){
        this.username = username;
        this.mail = mail;
    }

    log(){
        console.log(`Username is ${this.username} and mail is ${this.mail}`);
    }
}

const usr = new User("blitz","blitz@bozo.xyz")
usr.log()