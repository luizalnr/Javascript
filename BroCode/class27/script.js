const people = [{name: "Spongebob",  age: 30, gpa: 3.0}, 
                {name: "Patrick",    age: 36, gpa: 1.4},
                {name: "Squirdward", age: 65, gpa: 3.5},
                {name: "Sandy",      age: 31, gpa:1.2}]

people.sort((a, b) => a.name.localeCompare (b.name))

console.log(people)
