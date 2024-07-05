const person1 = {
    firstName:  "SpongeBob",
    lastName:   "SquarePants",
    age:        30,
    isEmployed: true,
    sayHello: () => console.log("Hi! I am SpongeBob!"),
    eat: () => console.log("I am eating a Krabby Patty"),
}

const person2 = {
    firstName:  "Patrick",
    lastName:   "Star",
    age:        42,
    isEmployed: false,
    sayHello: () => console.log("Hey, I am Patrick..."),
    eat: () => console.log("I am eating roast beef, chicken and pizza"),
}


person1.eat()
person2.eat()