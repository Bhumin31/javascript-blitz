// === checks equal and type
// baaki ik <,>,==,!=,&&,||,<=,>

// truthy
// " ", "anything", 'false', [], func(){}

// falsy
// "", null, undefined, BigInt 0n, 

// Null coalescing op ?? 
let val1;
val = null ?? 10 // 10
val = undefined ?? 10 // 10
val = 20 ?? 10 // first value
val = null ?? 20 ?? 10 // first value not null
// console.log(val);