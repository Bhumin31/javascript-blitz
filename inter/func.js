function ww(){
    console.log("Heisenberg");
}

ww()

function calc(...num1){
    return num1
}

console.log(calc(12,34,56));

const obj = {
    name: "Arthur",
    bounty: "5000$"
}
function myObj(anyobj){
    console.log(`${anyobj.name} bounty is ${anyobj.bounty}`);
}

myObj(obj)