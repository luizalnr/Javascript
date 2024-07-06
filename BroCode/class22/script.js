class Animal{
    constructor(name, age){
        this.name = name
        this.age  = age
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age)
        this.runSpeed = runSpeed
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age)
        this.swinSpeed = swimSpeed
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age)
        this.flySpeed = flySpeed
    }
}




const rabbit = new Rabbit("rabbit", 1, 25)
const fish   = new Fish("fish", 2, 15)
const hawk   = new Hawk("hawk", 3, 50)




console.log(rabbit.name)
console.log(rabbit.age)


console.log(fish.name)
console.log(hawk.name)