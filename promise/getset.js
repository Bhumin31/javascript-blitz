class User{
    constructor(email,passwd)
    {
        this.email = email;
        this.passwd = passwd;
    }

    get passwd(){
        return `${this.pass}nega`;
    }

    set passwd(val){
        this.pass = val;
    }

}

const usr = new User("h@gg.com","3135")
console.log(usr.passwd);