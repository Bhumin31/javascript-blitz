const arr = [1,2,3,4,5,6,7,8,9]

let nums = arr.filter( (i) => i >= 5 )
console.log(nums)

let newNums = arr.map( (i) => {return i * 10})
                        .map( (j) => {return j + 1})
                        .filter( (k) => {return k >= 50})
console.log(newNums)

let redArr = arr.reduce( (acc,currval) => {return acc + currval}, 0)
console.log(redArr);