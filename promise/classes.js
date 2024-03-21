class User{
    constructor(username){
        this.username = username;
    }

    log(){
        console.log(`Username is ${this.username}`);
    }
}


class IGN extends User{
    constructor(username,mail){
        super(username)
        this.mail = mail;
    }
        
    logIGN(){
        console.log(`IGN is ${this.username}`);
    }
    
}

const usr = new IGN("blitz","blitz@bozo.xyz")
usr.log()
usr.logIGN()
