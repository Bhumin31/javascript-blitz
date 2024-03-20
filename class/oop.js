function User(username,isLogged){
    this.username = username;
    this.isLogged = isLogged;
}

const usr1 = new User('John',false);
const usr2 = new User('Jack',true);

console.log(usr1);
console.log(usr2);
