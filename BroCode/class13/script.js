const numbers = [1, 2, 3, 4, 5]
const squares = numbers.map(square)
const cubes = numbers.map(cube)

console.log(cubes)

function square(element){
    return Math.pow(element, 2)
}

function cube(element){
    return Math.pow(element, 3)
}

function square(element){
    return Math.pow(element, 2)
}