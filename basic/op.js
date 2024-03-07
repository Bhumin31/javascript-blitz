let str1 = "yo";
let str2 = "VAN DER LINDE";
let str3 = str1 + " " +  str2;
console.log(str3);  

console.log(`Hello ${str1} how are you ${str2} dutch`);

const gName = new String("RDR2")
console.log(gName[3]);
console.log(gName.length);

const str4 = "     YOOOOOOOOOOOO    123";
const str4a = "YOOOOOOOOOOOO-123";
console.log(str4);
console.log(str4.trim());
console.log(str4a.split('-'));

const str5 = "Rockstar Games"
console.log(str5.replace('Games', 'North'));

const str6 = new Number(1000000);
console.log(str6.toFixed(2));
console.log(str6.toLocaleString());
console.log(str6.toLocaleString('en-IN'));
console.log(str6);