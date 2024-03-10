const Sym = Symbol("KEY")

const JsUser = {
    name : "sss",
    age : 12,
    [Sym]: "key1",
    city : "Valentine"
}

console.log(JsUser.city);
console.log(JsUser["name"]);
console.log(JsUser[Sym]);

JsUser.name = "John"
// Object.freeze(JsUser)
JsUser.name = "Jack"
JsUser.Func = function(){
    console.log(`Hello ${this.name}`)
}

console.log(JsUser.Func());

const JsUser1 = {
    name : "John",
    age : 36,
    city : "Beecher's Hope"
};

const JsUser2 = {
    name1 : "Arthur",
    age1 : 40,
    city1: "California"
};

const obj = Object.assign({}, JsUser1, JsUser2)
const obj1= {...JsUser1, ...JsUser2}
console.log(obj);
console.log(obj1);

const {name1 : name} = JsUser2;
console.log(name);