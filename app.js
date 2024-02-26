// console.log("HELLO PAPA PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM

const randomTarget = Math.floor(Math.random()*10)
// console.log(randomTarget)

const addGuess = () =>{
    let inputGuess = document.getElementById("userInput").value
    let newLi = document.createElement("li");
    let newGuessText = document.createTextNode(inputGuess)
    newLi.appendChild(newGuessText)
    document.getElementById("GuessList").appendChild(newLi)
}

const checkGuess = () =>{
    let input = document.getElementById("userInput").value

    console.log(input)
    if (input == randomTarget){
        let title = document.getElementById("title")
        title.textContent = `You guessed correctly ! The number was ${randomTarget}!`
        document.getElementById("userInput").value = ""
    }
    else if(input > randomTarget){
        let title = document.getElementById("title")
        title.textContent = `Too high, try again!`
        document.getElementById("userInput").value = ""
    }
    else if(input < randomTarget){
        let title = document.getElementById("title")
        title.textContent = `Too low, try again!`
        document.getElementById("userInput").value = ""
    }
    else{
        let title = document.getElementById("title")
        title.textContent = `Invalid, try again!`
        document.getElementById("userInput").value = ""
    }
}