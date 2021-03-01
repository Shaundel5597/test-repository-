// Calculate the remainder of 15/2, log the string: 'the remainder of 15/2 is (remainder)'

let myNum = 15 % 2
console.log(myNum)

console.log("the remainder of 15/2 is" + " " + "1")

           //OR

console.log("the remainder of 15/2 is " + myNum)
// Calculate the remainder of 30/2, log the string: 'the remainder of 30/2 is (remainder)'
let newNum = 30 % 2

console.log(newNum)

let theRemainder = "the remainder of 30/2 is"
let newNewString = "0"

console.log(theRemainder + " " + newNewString)

// Using Math.random(), console.log 3 random decimal numbers from 0 to 1000

let randomQuestion = Math.random()*1000

console.log(randomQuestion)

console.log( randomQuestion )


// Using Math.random(), console.log 3 random whole numbers from 0 to 1000

let thisIsRandom = Math.random()*1000

console.log(thisIsRandom)

console.log(Math.floor( thisIsRandom ))

console.log(Math.floor(thisIsRandom))

console.log(Math.round(Math.random()*1000))
// In your own words describe what "type coercian" in JavaScript is - this can be brief.

/* 
"type coercian" in JavaScript is basically changing data types from one to another for instance string to a object. 
*/



// ********EXTRA CREDIT*****

// Create a program that can convert temperature in Fahrenheit, Celsius, or Kelvin to the other two units
        // Instructions

// 1. Set the Fahrenheit variable to the temperature you get from the user (userInput).



// 2. Below, write the code that converts Fahrenheit to its equivalent Celsius & Kelvin values.
//     Tc = (5/9)*(tf-32) = Farenheight to Celsius


                 //Note: Conversion formula: http://www.csgnetwork.com/temp2conv.html.
                 // Note: Sample temperatures: 32f = 0c = 273.15K.
// 3. Below that, console.log() the starting and converted temperatures.



// 4. Repeat Steps 1-3 for starting Celsius and Kelvin temperatures.
// 5. Test your program by running it in node.
// 6. Your output code might look something like this:
                // console.log(`Fahrenheight: ${userInput} F`);
                // console.log(`Celsius: ${fahrenheightToCelsius} C`);
                // console.log(`Kelvin: ${fahrenheightToKelvin} K`);

  // 2. Ceate a variable and assign the string: "we are software engineers at nebula academy",
     // then In ONE LINE - extract the word "software" and log it. (Note: this is difficult - DON'T DO IT. Seriously, maybe skip this).



let variableOne = "we are software engineers at nebula academy";

let imGonnaTry = variableOne.split(' ')

let var3 = imGonnaTry[imGonnaTry.slice(7, 15)]

console.log(var3)

