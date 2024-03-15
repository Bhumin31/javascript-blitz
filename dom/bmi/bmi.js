const forms = document.querySelector('form');

forms.addEventListener('submit', function(e){
    e.preventDefault()

    const h = parseInt(document.querySelector('#heigth').value);
    const w = parseInt(document.querySelector('#weight').value);
    const res = document.querySelector('#results');

    if(h === '' || h <= 0 || isNaN(h)){
        res.innerHTML = "Please give a valid height"
    }
    else if(w === '' || w <= 0 || isNaN(w)){
        res.innerHTML = "Please give a valid weight"
    }
    else{
        const bmi = (w / ((h*h)/10000).toFixed(2))
        if(bmi < 18.6)
        res.innerHTML = `<span>Under Weight : ${bmi}</span>`
        else if(bmi > 18.6 && bmi < 24.9)
        res.innerHTML = `<span>Average : ${bmi}</span>`
        else if(bmi > 24.9)
        res.innerHTML = `<span>Overweight : ${bmi}</span>`
    }

})