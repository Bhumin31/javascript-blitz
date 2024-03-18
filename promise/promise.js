const prom = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async');
        resolve();
    },2000)
    
})

prom.then(function(){
    console.log('Promise');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async 2');
        resolve();
    },1000)
}).then(function(){
    console.log('Promisde 2');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async 3');
        resolve({user:'blitz',email:'blitz@google.com'});
    },1000)
}).then(function(userDetails){
    console.log(userDetails);
})

const promFour = new Promise(function(resolve,reject){
    let error = false
    if(!error){
        resolve({user:'blitz',email:'bliz.com'})
    }else{
        reject('ERROR BOZO')
    }
})

promFour.then((user) => {
    console.log(user);
    return user.email;
}).then((mail) => {
    console.log(mail);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Resolved or Rejected'))

const promFive = new Promise(function(resolve,reject){
    let error = true
    if(!error){
        resolve({user:'blitz',email:'bliz.com'})
    }else{
        reject('ERROR BOZO')
    }
})

async function consumeFive(){
    try {
        const res = await promFive
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

consumeFive()

async function githubUser(){
    try {
        const resp = await fetch('https://api.github.com/users/blitzboi');
        const data = await resp.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

githubUser()