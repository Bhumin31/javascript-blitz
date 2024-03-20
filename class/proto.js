function User(username,isLogged){
    this.username = username;
    this.isLogged = isLogged;
}

User.prototype.printMe = function(){
    console.log(`Hello ${this.username}`);
}

const usr1 = new User('John',false);
const usr2 = new User('Jack',true);

usr1.printMe()
usr2.printMe()

let str = 'LOLBLitz     '

String.prototype.trueLength = function(){
    console.log(`Length of string is ${this.trim().length}`);
}

str.trueLength()
'blitzboi31'.trueLength()