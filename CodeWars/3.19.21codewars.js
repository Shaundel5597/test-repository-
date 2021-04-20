// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

function countDevelopers(list) {
  
    return list.filter (developer => developer.continent == 'Europe' && developer.language == 'JavaScript').length
}

// Coding Meetup #2 - Higher-Order Functions Series - Greet developers

function greetDevelopers(list){
const addGreeting = element => {
    element.greeting= `Hi ${element.firstName}, what do you like the most about ${element.language}?`
    return element
}
return list.map
     
 }


  // ie#2
  function greetDevelopers(list) {
    list.forEach(r=> r.greeting= `Hi ${r.firstName}, what do you like the most about ${r.language}?`)
     
    return list
  
  } 