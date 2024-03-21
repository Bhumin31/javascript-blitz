function setUser(username){
    this.username = username;
    console.log("works");
}

function createUser(username,email,city){
    
    setUser.call(this,username);

    this.email = email;
    this.city = city;
}

const usr = new createUser("blitz", "blitz@blitz.com", "Blackwater");
console.log(usr);