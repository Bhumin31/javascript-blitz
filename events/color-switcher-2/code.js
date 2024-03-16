let interval;

const randColor = function(){
    let color = '#'
    const hex ='0123456789ABCDEF'

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = color;
    
}

const startChange = function(){
    if(!interval)
        interval = setInterval(randColor, 1000)
}

const stopChange = function(){
    clearInterval(interval);
    interval = null
}

document.querySelector('#start').addEventListener('click',startChange);



document.querySelector('#stop').addEventListener('click',stopChange);

