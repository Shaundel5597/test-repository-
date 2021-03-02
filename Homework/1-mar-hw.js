// using this array: let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let days = ['Sunday','Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday']

// log the length of the array

console.log((days.length), "<--- Length" )

// log the 4th element in the array 

console.log(days[4], "<--- finding element")

// remove the first element in the array. Log the new array and the element removed from the array

console.log(days.shift(), "<--- removing first element")

console.log(days, "<--- New Array" )



// Add 'Sunday' at the beginning of the array and log the new array


console.log(days.unshift("Sunday"))

console.log(days, "<--- New Unshift Array")

// Remove the last element in the array. Log the new array and log the element removed

console.log(days.pop(), "<---removing last")

// Add 'Saturday' to the end of the array and log the new array
days.push("Saturday")
console.log(days[days.length-1], "<--- Readding")

// replace 'Thursday' with 'Friday Junior'

days.splice(3, 1, "Friday Junior" )

console.log(days)

// extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'

let myFavDay = "my favorite day of the week is"

console.log(days.push(4, myFavDay.length-1), "<--- extract")


// combine these two arrays together

let phone = ['iphone', 'android']


let laptop = ['MacBook', 'HP', 'Dell']

const putTogether = phone.concat(laptop)

console.log(putTogether, "<--- concatenation")


/*Given the string "What Time Is It", create a new string:
"What-Time-Is-It" using string and array methods.
Make sure you store that new string in a variable.
Log that variable.
*/

let theTimeStr = "What Time Is It"

const myNewStr = theTimeStr.split(" ")

console.log(myNewStr, "<--- splitting")

const iDontKnow = myNewStr.join("-")

console.log(iDontKnow, "<--- joining")

/*Turn the saved variable from above back into an array and mutate it into:
- ["It", "Is", "Time"]
Use only array methods / a certain string method to do this.
*/


// Read up till (not including) page 50 in Eloquent JavaScript