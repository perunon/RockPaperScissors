//ELEMENTS

const start = document.getElementById("start");
const results = document.getElementById("results");
const chosenBtn = document.getElementById("chosenBtn");
const chosenBtnImage = document.getElementById("chosenBtnImage");
const houseBtn = document.getElementById("houseBtn");
const houseBtnImage = document.getElementById("houseBtnImage");

// VARIABLES

const figures = ["paper", "scissors", "rock"];
let score = 0;


const newGame = () => {
    hide(results);
    show(start, "grid");
}

const play = (figure) => {

    // console.log(`Wybrano ${figure}`);

    hide(start);
    show(results, "flex");

    chosenBtn.className = `actionBtn ${figure}Btn`;
    chosenBtnImage.src = `./images/icon-${figure}.svg`;

    let houseChoice = chooseRandomItem(figures);

    houseBtn.className = `actionBtn ${houseChoice}Btn`;
    houseBtnImage.src = `./images/icon-${houseChoice}.svg`;

    let result = checkResults(figure, houseChoice);

    if (result == "you win") {
        document.getElementById("communicat").innerText = result;
        document.getElementById("chosenBtn").className = `actionBtn ${figure}Btn winnerBtn`;
        document.getElementById("playAgainBtn").style.color = "green";
        document.getElementById("leftSide").style.width = "33%";
        document.getElementById("rightSide").style.width = "33%";
        document.getElementById("middleSide").style.display = "flex";

        score ++;
        document.getElementById("score").innerText = score;
    }
    else if (result == "you lose") {
        document.getElementById("communicat").innerText = result;
        document.getElementById("houseBtn").className = `actionBtn ${houseChoice}Btn winnerBtn`;
        document.getElementById("playAgainBtn").style.color = "red";
        document.getElementById("leftSide").style.width = "33%";
        document.getElementById("rightSide").style.width = "33%";
        document.getElementById("middleSide").style.display = "flex";
        document.getElementById("score").innerText = --score;
    }
    else if (result == "draw") {
        document.getElementById("communicat").innerText = result;
        document.getElementById("leftSide").style.width = "33%";
        document.getElementById("rightSide").style.width = "33%";
        document.getElementById("middleSide").style.display = "flex";
    }
}

const playAgain = () => {
    newGame();
}

const chooseRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

const checkResults = (figure, houseChoice) => {

    if (figure == "paper") {
        if (houseChoice == "paper") return "draw";
        if (houseChoice == "scissors") return "you lose";
        if (houseChoice == "rock") return "you win";
    }

    if (figure == "scissors") {
        if (houseChoice == "paper") return "you win";
        if (houseChoice == "scissors") return "draw";
        if (houseChoice == "rock") return "you lose";
    }

    if (figure == "rock") {
        if (houseChoice == "paper") return "you lose";
        if (houseChoice == "scissors") return "you win";
        if (houseChoice == "rock") return "draw";
    }
}

const show = (element, displayType, animationDuration = 50) => {

    element.style.display = displayType;

        setTimeout(function () {
            element.classList.remove('visuallyhidden');
            }, animationDuration);  
        element.addEventListener('transitionend', function(e) {
            element.classList.remove('hidden');
        }, {
        capture: false,
        once: true,
        passive: false
        });    
}

const hide = (element, animationDuration=50) => { 

    if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        setTimeout(function () {
        element.classList.remove('visuallyhidden');
        }, animationDuration);
    } else {
        element.classList.add('visuallyhidden');    
        element.addEventListener('transitionend', function(e) {
            element.classList.add('hidden');
        }, {
        capture: false,
        once: true,
        passive: false
        });
    }
    element.style.display="none";
}

const showRules = () => {
    document.getElementById("rulesPage").style.display = "flex";
}

const hideRules = () => {
    document.getElementById("rulesPage").style.display = "none";
}

newGame();
