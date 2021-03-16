function nthSmallest(arr, pos){
    //your code here
  return arr.sort((a,b)=>a-b)[pos-1]
    }

   
   
    function evenOrOdd(str) {
        let evenNum = num % 2 == 0 
         let oddNum = num % 2 == 0
          if (evenNum > oddNum)
         return "Even the greater than Odd" 
        else return "Odd is greater than Even"
    }
        
   
   
    function hydrate(s) {
        // your code here
        let sum = 0
        let newList = s.split(" ")
        
          for (let i = 0; i < newList.length; i++){
            if (Number(newList[i])){
          }
        }
        if (sum > 1){
          return sum + " glasses of water"
        }
        return sum + " glass of water"
      }