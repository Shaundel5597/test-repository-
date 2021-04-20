// What is a key on an object? What is a value? What is a property?
/*
Key is what holds the value anad is what you call into the function.
Value is what the key is holding 
Properties are the data that the object is holding 

// What are a couple ways you can create an object?

by giving it a key and then giving the key a value or 

Car: Dodge

// What are a couple ways you can access a key's value?

 By calling the key you want into the function or console.log and insert the key you want into the paranthesis  

// How do you assign a key-value pair to an object?

 make a variable equal to an open curly bracket and list the keys wiht the pairs in a list form
*/
// Declare a variable "human" and initilize it with a value of an object that contains relevant properties.

let human = {
    height: "6feet",
    weight: 260,
    gender: "Male",
    race: "black",
}

// Create a function called covidVaccination that can take in that human object as an input and assign 
// it a new property that identifies that human as vaccinated.

function covidVaccination(object){
   if(object.species === "human"){
       object.vaccinated = true;
    
   }
   return "Human Vaccinated"
}
console.log(covidVaccination(human))

console.log(human)
// Create a constructor function for humans.

function human(height, weight, gender, race)
this.height = height,
this.weight = weight,
this.gender = gender, 
this.race =  race

// Create 5 new humans.

const Shaundel = new human("6'1", 22, "Male", "Shaundel")
const bayley =  new human ("5'9", 23, "Male", "Bayley")
const Johnnaibys = new human ("5'7", 33, "Male", "Johnnaibys")
const Lucian = new human ("5'9", 37, "Male", "Lucian")
const Tefe = ("5'10", 30, "Male", "Tefe")

// Vaccinate a couple of those humans and then store all of them in an array.
covidVaccination(Shaundel)
covidVaccination(bayley)
covidVaccination(Johnnaibys)


// Create a function called covidScreener that can take in an array of humans as an input, and check to
// see who has been vaccinated - have the function return a string identifying those humans who have and 
// have not been vaccinated.
const seClass =  [Shaundel, bayley, Johnnaibys, Lucian, Tefe];

function covidScreener(array){
 const vaccinatedHumans = [];
 const nonVaccinatedHumans = [];
  for (let i = 0; i ,array.length; i++){
    const currentHuman= array[i]
    if (currentHuman.vaccinated){
        vaccinatedHumans.push(currentHuman);
        } else {
            nonVaccinatedHumans.push(currentHuman)
        }
    }
 }
  

// Delete a property from one of your humans