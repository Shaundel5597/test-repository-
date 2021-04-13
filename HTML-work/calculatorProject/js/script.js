console.log(45)
// All my listed buttons
let allClear = document.querySelector("#clear")

let numbers =  document.querySelectorAll("button.number")

let equal = document.querySelector("#equal")

let operators = document.querySelectorAll("button.operator")


// everything populated in the display screen
let displayScreen = document.querySelector("#display-screen")

let calculator = document.querySelector("#calculator-outline")

let currentOperand = document.querySelector("output")

let displayBox = document.querySelector("#display-box input")
console.log(displayBox, "<---")

let currentCalculation = ""
// Left side of our calculation
let leftNum = ""
// Right side of our calculation
let rightNum = ""

// We are holding our operator here
let operator = ""

const showText = (numTxt) => {
    displayBox.value += numTxt
}

const handleNumClick = (button) => {
    let text = button.innerText;
    if(operator){
        rightNum += text;
    } else {
        leftNum += text;
    }
    showText(text);
}

// get the numbers ive pressed and show them on the display screen
numbers.forEach(number =>  number.addEventListener("click", () => handleNumClick(number)));

// all clear button to clear the display
function clear() {
    displayBox.value = ""
    operator = ""
    leftNum = ""
    rightNum = ""
    currentCalculation = ""
}

allClear.addEventListener("click", clear);

operators.forEach(operators => operators.addEventListener("click", saveOperation));

// We are setting our operator here
function saveOperation(opp) {
    const val = opp.target.innerText;
    showText(val);
    if(val === "+"){
        operator = "+";
    }
    if(val === "-"){
        operator = "-";
    }    
    if(val === "÷"){
        operator = "/";
    }
    if(val === "x"){
        operator = "*";
    } 
}

const calculationLegend = {
    "+": () => +leftNum + +rightNum,
    "-": () => leftNum - rightNum,
    "*": () => leftNum * rightNum,
    "/": () => leftNum / rightNum
}

equal.addEventListener("click", calculate);

function calculate(){
    // So we have our operator
    displayBox.value = calculationLegend[operator]();
    operator = "";
}

