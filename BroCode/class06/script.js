
let loggeIn = false
let username 
let password 

while (!loggeIn){
    username = window.prompt("Enter your username")
    password = window.prompt("Enter your password")

    if (username === "myUsername" && password === "myPassword"){
        loggeIn = true
        console.log("You are logged in!")

    } else {
        console.log("Invalid credentials! Please try again")
    }
}