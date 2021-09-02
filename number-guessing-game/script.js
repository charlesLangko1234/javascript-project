const input = document.getElementsByClassName('numInput')[0];
const btn = document.getElementsByClassName('guess')[0];
const numOfGuess = document.getElementsByClassName('num-of-guess')[0];
const answer = document.getElementsByClassName('answer')[0];
const clue = document.getElementsByClassName('clue')[0];
const btnRestart = document.getElementsByClassName('restart')[0];
const sign = document.getElementsByTagName('h2')[0];

var numOfTry = 0;
var guessList = [];
var randNum;
var displayNumofGuess = '';

function restart() {
    numOfTry = 0;
    guessList = [];
    randNum;
    displayNumofGuess = ''
    clue.innerHTML = '';
    numOfGuess.innerHTML = 0;
    answer.innerHTML = 'None';
    sign.innerHTML = '';
}

btnRestart.addEventListener('click',()=>{
    randNum = Math.floor(Math.random()*100);
    restart();
    sign.innerHTML = 'Game Start';
    input.value = '';
    console.log(randNum)
});

btn.addEventListener('click',()=>{
    displayNumofGuess = ''
    numOfTry +=1;
    var guessNum = Number(input.value);
    guessList.push(guessNum);
    
    if(guessNum < randNum) {
        clue.innerHTML = 'Your guess is too low.'
        guessList.forEach(num => {
            displayNumofGuess += String(num) + ' ';
        });
        answer.innerHTML = displayNumofGuess;
    } else if(guessNum > randNum) {
        clue.innerHTML = 'Your guess is too high.'
        guessList.forEach(num => {
            displayNumofGuess += String(num) + ' ';
        });
        answer.innerHTML = displayNumofGuess;
    } else if (guessNum == randNum) {
        clue.innerHTML = 'Your guess is true.';
        guessList.forEach(num => {
            displayNumofGuess += String(num) + ' ';
        });
        answer.innerHTML = displayNumofGuess;
    } if (numOfTry > 5) {
        restart();
        clue.innerHTML = 'Your lose.'
    }
    numOfGuess.innerHTML = numOfTry;
});