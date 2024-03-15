let randNum = parseInt(Math.random() * 100 + 1);

const input = document.querySelector('.guessField');
const submit = document.querySelector('#subt')
const guesses = document.querySelector('.guesses');
const remGuesses = document.querySelector('.lastResult');
const lowHi = document.querySelector('.lowOrHi');
const stOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let guessArr = [];
let guessCount = 0;
let canPlay = true

if(canPlay)
{
    submit.addEventListener('click', function(e){
        e.preventDefault();
        let guess = parseInt(input.value);
        console.log(guess);
        isValidGuess(guess);
    })
}

function isValidGuess(guess)
{
    if(guess < 1 || guess > 100)
    {
        alert("Enter number in range")
    }
    else if(isNaN(guess))
    {
        alert("Enter a valid number")
    }
    else{
        guessArr.push(guess);
        if(guessCount === 10){
            dispGuess(guess)
            dispMsg(`Game Over. The Number was ${randNum}`)
            gameOver()
        }
        else{
            dispGuess(guess)
            remGuesses.innerHTML = `${10 - guessCount}`
            checkGuess(guess)
        }

    }
}

function checkGuess(guess)
{
    if(guess > randNum)
    {
        dispMsg(`Number is higher`)
    }
    if(guess < randNum)
    {
        dispMsg(`Number is lower`)
    }
    if(guess == randNum)
    {
        dispMsg(`Correct guess. Number was ${randNum}`);
        gameOver();
    }
}

function dispGuess(guess)
{
    input.value = ''
    guesses.innerHTML = `${guessArr} `
    guessCount++;
}

function dispMsg(msg)
{
    lowHi.innerHTML = `${msg}`
}

function gameOver()
{
    input.value =''
    input.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Restart</h2>`
    stOver.appendChild(p);
    canPlay = false;
    Restart();
}

function Restart()
{
    const resetButton = document.querySelector('#newGame')
    resetButton.addEventListener('click',function(e){
        randNum = parseInt(Math.random() * 100 + 1);
        guessArr = []
        guesses.innerHTML =''
        remGuesses.innerHTML = `${11 - guessCount}`
        guessCount = 1;
        input.removeAttribute('disabled')
        stOver.removeChild(p)
        canPlay = true;
    })

}

