// for of loop, cannot iterate through object

const arr = [1,2,3,4,5,6,7,8,9,10];

for (const i of arr) {
    //console.log(i);
}

let str = "HeeHeeHeeHaw"

for (const i of str) {
    //console.log(i)
}

//Maps

const nMap = new Map()
nMap.set('Mini Pekka',"Pancakes")
nMap.set('Pekka',"Butterflies")
nMap.set('Hog Rider',"Hawg Raidaah")

//console.log(nMap);

for (const [i,j] of nMap) {
    //console.log(`${i} screams ${j}`);
}

//for in loop

const MCobj = {
    rdr : "Red Harlow",
    rdr1 : "Jack Marston",
    rdr2 : "Arthur MOrgan"
}

for (const key in MCobj) {
    //console.log(`${MCobj[key]} is MC of ${key}`);
}

//foreach loop

const arr1 = [1,2,3,4,5]

arr1.forEach( function (i) {
    console.log(i);
} )

//arrow
arr1.forEach(  (i) => {
    console.log(i);
} )

arr1.forEach( function (val,index,arrList) {
    console.log(val,index,arrList);
} )

const games = [
    {
        gName : "RDR1",
        publisher : "Rockstar Games"
    },
    {
        gName : "GOW",
        publisher : "Sony"
    },
    {
        gName : "COD",
        publisher : "Actvision"
    }
]

games.forEach( (i) => {
    console.log(i.gName);
} )