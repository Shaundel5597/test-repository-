//If you are proviveded a snippet do not uncomment and run.
//You are allowed to use W3schools, MDN and your notes

//MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
//W3Schools - https://www.w3schools.com/js/default.asp


//1.)There are 3 javascript keywords to initialize a variable. create A new variable below called value and set it to an empty string

let value = ""

const value = ""

var value = ""

//2.)JavaScript has many data types. String is an example of one. Name 2 more

Boolean
Number


//3.)Evaluate the following statements: [What would this line of code return in my console]
//Don't run these exact line of code! [anything close is allowed]
    //4A.) console.log("4" + 4)
    //4B.) console.log("4" * 4)
    //4C.) console.log("4" == 4)
    //4D.) console.log("Tefe".indexOf("E"))
    // 4E.) console.log("Javascript Is Fun".split(" "))

//4.)Write a function that takes an array as input and console logs each element in the array
let numbersInArr = [2, 12, 22, 32, 42, 52, 62];

function failPopQuiz (arr){

 let logEachNum = []

  for (let i = 0; i < arr.length; i++){
      
    console.log(arr[i])
  }
}

//5.) Which of the following statements is not true about for loop statement:

    //A.) You can declare a variable in a for loop
    //B.) You can't make an infinite loop in a for loop
    //C.) You can exit out of a for loop with the break keyword
    //D.) For loops can increment upwards dowards or even not at all  //ask for clarifcation if this is confusing you

     B

//6.) Write a function that takes an array of numbers as input and returns the average of all the numbers
let newNumInArr = [55, 97, 81, 51, 37, 74]
 function popQuiz(array){

  let averageOfNum = 0

   for (let i = 0; i < array.length; i++){

   
     
     averageOfNum += array[i] / array.length
   }
 }
//7.) You are given a dataset where you have nested arrays of information and you need to sort through all that information to sum up all the numbers.
/*
ie.

const matrix = [[1,2,[4,55],[41,455],[525,525,[13,567,96,33]],[45,4145,682]]]
*/
    //7A.) There are two potential 1 word answers for the name the approach you need to take to solve this problem. Name either one [ First one starts with I, Second one starsts with R ]
    //7B.) In 1-2 sentances explain high level [like if you were explaining to a 5 year old] what your approach to solving this would be.