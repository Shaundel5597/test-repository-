
function findLongest(str) {
  
    var spl = str.split(" ");
    var longest = 0
    
    for (var i = 0; i < spl.length; i++){
      if (spl[i].length > longest) {
        longest = spl[i].length
      }
      }
      return longest
  }

//Sum ALL the arrays!
  function arraySum(arr) {
// create a variable = 0
  let sum = 0
// create a for loop to go through array
  for (let i = 0; i < arr.length; i++){
      if (Array.isArray(arr[i])){
          sum += arraySum(arr[i])
      } else if(typeof arr[i] === "number"){
          sum += arr[i]
      }
      
      //if the element is a number then we add it to the sum
    }
    return sum
}