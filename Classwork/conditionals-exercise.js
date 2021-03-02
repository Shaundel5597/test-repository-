// Fortune Teller Machine Project
        // (Comp Sci / Programming concept: Control Flow) -> 
        //  Control Flow: The order in which individual statements, instructions or function calls are executed or evaluated.
    
// Goal: Create a program that spits out a random fortune everytime you run it. The program should accept a username and include it 
       // in the fortune (to personalize the message) ie: "Hello Tefe Del Rosario-Bell, your future is looking kinda bleak my friend."

//       How do I do this?
//        - Create a random number.
//      - Create a control flow (if..else statements) to determine what is logged to the console, based on that random number.
//        - Definitely feel free to get creative.

let usNme = "Shaundel"
const randomNum = Math.floor( Math.random()*45)
if(randomNum<= 10){
    console.log("hi, shaundel,")

} else if 
    (randomNum<= 20){
    console.log(usNme + ' you might know what youre doing')
} else if 
    (randomNum<= 30){
    console.log("i dont even know what your doing, " + usNme)
} else if 
(randomNum<= 40){
    console.log("i think i finally got it")
}


