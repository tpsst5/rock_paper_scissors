// gets computer's choice
const computerPlay = () => {
    const random_num = Math.floor(Math.random() * 3);
    if (random_num == 0) {
        return 'ROCK';
    } else if (random_num == 1) {
        return 'PAPER';
    } else {
        return 'SCISSORS';
    }
};

// assign computer's choice to variable
let computerSelection = computerPlay();

let wins = 0;
let losses = 0;

// returns result of one round               
const playRound = (e) => {
    computerSelection = computerPlay();
    let playerChoice = e.target.innerText;
    while (wins < 3 && losses < 3) {
        if (playerChoice === computerSelection) {
            document.getElementById('status').innerHTML = 'Tie!';
            break;
        } else if (playerChoice === 'ROCK' && computerSelection === 'SCISSORS') {
            wins = ++wins;
            document.getElementById('wins').innerHTML = 'Player: ' + wins;
            document.getElementById('status').innerHTML = 'You win! Rock beats scissors!';
            break;
        } else if (playerChoice === 'ROCK' && computerSelection === 'PAPER') {
            losses = ++losses;
            document.getElementById('losses').innerHTML = 'Computer: ' + losses;
            document.getElementById('status').innerHTML = 'You lose! Paper beats rock!';
            break;
        } else if (playerChoice === 'PAPER' && computerSelection === 'ROCK') {
            wins = ++wins;
            document.getElementById('wins').innerHTML = 'Player: ' + wins;
            document.getElementById('status').innerHTML = 'You win! Paper beats rock!';
            break;
        } else if (playerChoice === 'PAPER' && computerSelection === 'SCISSORS') {
            losses = ++losses;
            document.getElementById('losses').innerHTML = 'Computer: ' + losses;
            document.getElementById('status').innerHTML = 'You lose! Scissors beats paper!';
            break;
        } else if (playerChoice === 'SCISSORS' && computerSelection === 'PAPER') {
            wins = ++wins;
            document.getElementById('wins').innerHTML = 'Player: ' + wins;
            document.getElementById('status').innerHTML = 'You win! Scissors beats paper!';
            break;
        } else if (playerChoice === 'SCISSORS' && computerSelection === 'ROCK') {
            losses = ++losses;
            document.getElementById('losses').innerHTML = 'Computer: ' + losses;
            document.getElementById('status').innerHTML = 'You lose! Rock beats scissors!';
            break;
        } else {
            console.log('error');
            break;
        }
    }
    if (wins === 3) {
        alert('You win!');
        document.location.reload();
        clearInterval(interval);
    } else if (losses === 3){
        alert('Game over! You lose');
        document.location.reload();
        clearInterval(interval);
    }
};

function winAlert(){
    alert('You win!');
}

function loseAlert() {
    alert('Game over! You lose!');
}

var buttons = document.getElementsByClassName('btn');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playRound, false);
}
