const minNum = 1 
const maxNum = 100
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum

let attempts = 0
let running = true
let guess 

while(running == true){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`) //escolhendo um numero
    guess = Number(guess)    //transformando a string em um numero

    if (isNaN(guess)){ //se oq for digitado n for um numero...
        window.alert("Please enter a valid number")

    } else if (guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number")

    } else {
        attempts++ //aumenta em 1 a quiantidade de tentativas
        if(guess < answer){
            window.alert("Too low! try again!")

        } else if (guess > answer) {
            window.alert("Too hight! try again!")

        } else {
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts`)
            running = false
        }

    }


}