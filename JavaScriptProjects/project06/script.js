const container       = document.querySelector(".container")
const addQuestionCard = document.getElementById("add-question-card")
const cardButton      = document.getElementById("save-btn")
const question        = document.getElementById("question")
const answer          = document.getElementById("answer")
const errorMessage    = document.getElementById("error")
const addQuestion     = document.getElementById("add-flashcard")
const closeBtn        = document.getElementById("close-btn")
let editBool          = false



//Add question when user clicks 'Add Flashcard' button
addQuestion.addEventListener("click", () =>{
    container.classList.add("hide")
    question.value = ""
    answer.value = ""
    addQuestionCard.classList.remove("hide")
})


//Hide Create flashcard Card 
closeBtn.addEventListener(
    "click", 
    () => {
        container.classList.remove("hide");
        addQuestionCard.classList.add("hide");
        
        if(editBool){
            editBool = false;
            SubmitQuestion();
        }
    }
);



//Submit Question
cardButton.addEventListener("click", 
    (SubmitQuestion = () =>{
        editBool = false
        tempQuestion = question.value.trim()
        tempAnswer   = answer.value.trim()

        if(!tempQuestion || !tempAnswer){
            errorMessage.classList.remove("hide")

        } else{
            container.classList.remove("hide")
            errorMessage.classList.add("hide")
            viewlist()
            question.value = ""
            answer.value = ""
        }
    })
)



//Card Generate
function viewlist(){
    var listCard = document.getElementsByClassName("card-list-container")
    var div = document.createElement("div")
    div.classList.add("card")

    //question
    div.innerHTML += `<p class = "question-div">${question - value}</p>`
}