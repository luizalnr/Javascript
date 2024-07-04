//reset parameters eh o contrario do spread
//ele agrupa elementos separados em uma propagacao de uma array

function openFridge(...foods){
    console.log(foods)
}
function getFood(...foods){
    return foods
}


const food1 = "pizza"
const food2 = "hamburger"
const food3 = "hotdog"
const food4 = "sushi"
const food5 = "ramen"

const foods = getFood(food1, food2, food3, food4, food5)
console.log(foods)



///////////////////

