//spread operador expande uma array em elementos separados parametros

let numbers = [1, 2, 3, 4 ,5]
let maximum = Math.max(...numbers)
let minimum = Math.min(...numbers)

console.log(maximum)
console.log(minimum)



////////////////////
let username = "Bro Code"
let letters = [...username].join("-")

console.log(letters)



////////////////////
let fruits = ["apple", "orange", "banana"]
let vegetables = ["carrots", "celary", "potatos"]

let foods = [...fruits, ...vegetables, "eggs", "milk"]

console.log(foods)