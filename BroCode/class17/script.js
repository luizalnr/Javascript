const hi = (name, age) => {console.log(`Hello ${name}`)
                 console.log(` You are ${age} years old`)}

hi("Bro", 25)


///
///
///

setTimeout(function(){
    console.log("Hello")
}, 3000) 

///
///
///


const numbers = [1, 2, 3, 4, 5, 6]

const square = numbers.map((element) => Math.pow(element, 2))
const cubes = numbers.map((element) => Math.pow(element, 3))
const evenNums = numbers.filter((element) => element % 2 === 0)
const oddNums = numbers.filter((element) => element % 2 !== 0)
const total = numbers.reduce((accumulator, element) => accumulator + element)


console.log(total)