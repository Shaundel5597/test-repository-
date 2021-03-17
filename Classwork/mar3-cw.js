// Write a function that uppercases the first letter of each word

function upperCaseWrd(word){
    return word[0].toUpperCase() + word.slice(1)
}

let myUpperCase = upperCaseWrd("shaundel")
console.log(myUpperCase, "<--- Line 8")
/* 
    Rock Paper Scissors (using functions, conditionals, Math, variables, data type)
    Player VS Computer



        Possible outcomes:
            - Rock smashes Scissors
            - Scissors cuts paper
            - Paper covers Rock
            - There could also be a tie
        
        How should we break up our program?
            - Get the users choice
            - Get the computers choice
            - Compare the two choices and find out who won
            - Start the game and console.log the choices made & the winner

        Possible functions:
            getUserChoice();
            getComputerChoice();
            determineWinner();
            playGame();
            
*/ 
let randomNumber = Math.floor(Math.random()*3 )

function getUserChoice(randomNumber){
    if(randomNumber === 1 ){
        return "Paper"
    }else if(randomNumber === 2){
            return "Rock"
                }else if (randomNumber === 3){
                    return "Scissors"
    }
    }

    function getComputerChoice(randomNumber){
        if(randomNumber === 1){
            return("Rock")
         }else if(randomNumber === 2){
                return("Paper")
             }else if(randomNumber === 3){
                   return("Scissors")
    }
}
// This 
function whosWinner(winner){
    if (getUserChoice() === getComputerChoice){
     return winner = "Its a Tie..." 
    }else if (getComputerChoice === getUserChoice){
     return winner = "Its a Tie..."
    }else if (getUserChoice === 1 && getComputerChoice === 1 )
}
}