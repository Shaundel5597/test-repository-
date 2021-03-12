function warnTheSheep(queue) {
    // 1. find out where the wolf is 
      let wolf = queue.indexOf("wolf")
        if (wolf == queue.length-1)
          return "Pls go away and stop eating my sheep"
            else return`Oi! Sheep number ${(queue.length - 1) - wolf}! You are about to be eaten by a wolf!`
      
    //2. warn the sheep ahead
    //3. figure out the sheeps ID
    // 4. return the correct string
    }