let numArray = [9, 12, 3, 0, 8, 50, 101, 8, 4, 15, 3, 2];

// 1. Using the array above create a function that loops through the array and returns a new array with all the numbers multiplied by 10.
function multiplyNums(array){
    let multipliedArr = []
    for (let i = 0; i<array.length; i++){
        
    console.log(array[i]);

    multipliedArr.push(array[i]*10)

    }return multipliedArr
}
    console.log(multiplyNums(numArray), "<--- numbers multiplied by 10")

// 2. Using the array above create a function that returns the sum of all numbers within.

/*function findSum(output){
    let sum = 0
        for (let i = 0; i<output.length; i++){
}           sum += output[i]

                
                return sum
                
}console.log(sum)

/* 
3. Create a function that accepts an array and a search value. This function will return true if the search value is an element in the array. Otherwise, it will return false. Don't use any built in array methods to do this. Ie: 
doesItInclude([23, 24, "kale"], "kale")  -> should return true
*/

function searchFunct(arr, search){
    for (let i = 0; i < arr.length; i++){
        if (search === arr[i]){
                return true
        }
    }   
                 return false
}

// 4. Create a function that accepts an array. This function will return a new array with the elements in reverse order.

function revereseFunct(array){
   let reversedArr = []

    for (let i = array.length-1; i >= 0; i--){
        reversedArr.push(array[i])
    }
    return reversedArr

} console.log(revereseFunct(numArray))


// 5. Create another function that adds the numbers in the array that are NOT divisible by 3 and return the total.

function addNotDivisible(array){
    let nonDivisible = 0

        for (let i = 0; i < array.length; i++){
            if(array[i] % 3 !== 0){
                console.log(array[i, "<--- not divisible by 3"])
                    nonDivisible = nonDivisible + array[i]

        }
    
    }
    return nonDivisible
}

console.log(addNotDivisible(numArray))

// Use the following array for the questions below (you might need to find examples of "nested loops" using good ol' google):

const nestedArr = ['full', 'stack', ['node', 'react'], [], ['redux'], ['html', 'css'], 'sql'];

// 6. Create a function that logs every word that has the letter 'a' in the word in the array and the nested arrays. Return "Done!" at the end.

function wordsWithA(array){
    for (let i = 0; i < array.length; i++){
        if(array[i] === "a"){
            console.log(array[i])

            break; 
        }
    }
    return "Done!"
}

let holdValue = wordsWithA(nestedArray)
// 7. Create a function that logs every word that has a length of 4 in the array and in the nested arrays. Return "Done!" at the end.



// 8. Create a function that logs every word that has the letter 'a' in the word in the array and nested arrays.