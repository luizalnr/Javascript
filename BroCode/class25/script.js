const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    adress: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water"
    }
}

for(const property in person.adress){
    console.log(person.adress[property])
}



///
///
///


