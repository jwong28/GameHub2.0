const userScore = document.getElementById("user-score");
const compScore = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > p");
const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissor = document.getElementById("Scissor");
const happyEmoticon = document.getElementById("happy");
const sadEmoticon = document.getElementById("sad");
let user = 0;
let comp = 0;

function randComputerChoice(){
    const choices = ['r','p','s'];
    const rand = Math.floor(Math.random()*3);
    return choices[rand];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissor";
}

function win(userChoice, computerChoice){
    user++;
    userScore.innerHTML = user;
    compScore.innerHTML = comp;
    result.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Win!`;
    document.getElementById(convertToWord(userChoice)).classList.add('win');
    happyEmoticon.style.visibility = "visible";
    sadEmoticon.style.visibility = "visible";
    rock.style.pointerEvents ="none";
    paper.style.pointerEvents ="none";
    scissor.style.pointerEvents ="none";
    happyEmoticon.style.left = "-200px";
    sadEmoticon.style.right = "-200px";
    setTimeout(() => document.getElementById(convertToWord(userChoice)).classList.remove('win'),300);
    setTimeout(() => {
        happyEmoticon.style.visibility = "hidden";
        sadEmoticon.style.visibility = "hidden";
        rock.style.pointerEvents ="auto";
        paper.style.pointerEvents ="auto";
        scissor.style.pointerEvents ="auto";
        happyEmoticon.style.left = "";
        sadEmoticon.style.right = "";
    },2000);
}

function lose(userChoice, computerChoice){
    comp++;
    userScore.innerHTML = user;
    compScore.innerHTML = comp;
    result.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You Lose...`;
    document.getElementById(convertToWord(userChoice)).classList.add('lose');
    happyEmoticon.style.visibility = "visible";
    sadEmoticon.style.visibility = "visible";
    rock.style.pointerEvents ="none";
    paper.style.pointerEvents ="none";
    scissor.style.pointerEvents ="none";
    happyEmoticon.style.right = "-200px";
    sadEmoticon.style.left = "-200px";
    setTimeout(() => document.getElementById(convertToWord(userChoice)).classList.remove('lose')
    ,300);
    setTimeout(() => {
        happyEmoticon.style.visibility = "hidden";
        sadEmoticon.style.visibility = "hidden";
        rock.style.pointerEvents ="auto";
        paper.style.pointerEvents ="auto";
        scissor.style.pointerEvents ="auto";
        happyEmoticon.style.right = "";
        sadEmoticon.style.left = "";
    },2000);
}

function draw(userChoice, computerChoice){
    result.innerHTML = `${convertToWord(userChoice)} draws ${convertToWord(computerChoice)}... It's a draw!`;
    document.getElementById(convertToWord(userChoice)).classList.add('draw');
    setTimeout(() => document.getElementById(convertToWord(userChoice)).classList.remove('draw')
    ,300);
}

function userChoice(choice){
    const computerChoice = randComputerChoice();
    switch(choice+computerChoice){
        case "pr":
        case "sp":
        case "rs":
            win(choice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(choice,computerChoice);
            break;
        case "pp":
        case "ss":
        case "rr":
            draw(choice,computerChoice);
            break;
    }
}

function main(){
    rock.addEventListener('click', function() {
        userChoice('r');
    });

    paper.addEventListener('click', function() {
        userChoice('p');
    });

    scissor.addEventListener('click', function() {
        userChoice('s');
    });
}

main();
