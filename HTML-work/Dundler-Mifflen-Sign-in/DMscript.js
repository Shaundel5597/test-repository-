
const inputName = document.body.querySelector("#name-Slot input");
const idNumber = document.body.querySelector("#password input")
const nameSubmission = document.body.querySelector("#sign-in-page button");
const userList = document.body.querySelector("#user-list")


class Employee {
    constructor (name, date){
        this.name = name 
        this.date = date
    }    
    showInSignInBox() {
        return `<div class = 'row'> <p>${this.name}</p><p>${this.date.toString()} \n</p></div>`
    }
}

function click() {
    newWorker = new Worker(inputName.Value, new Date(date.now()))
    workers [idNumber.value] = newWorker
    inputName = ""
    IDnumber = ""
}

