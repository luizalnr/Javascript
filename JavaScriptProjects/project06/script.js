const container = document.querySelector(".container");
const addQuestionCard = document.getElementById("add-question-card");
const cardButton = document.getElementById("save-btn");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const errorMessage = document.getElementById("error");
const addQuestion = document.getElementById("add-flashcard");
const closeBtn = document.getElementById("close-btn");
let editBool = false;

// Adicionar pergunta quando o usuário clica no botão 'Add Flashcard'
addQuestion.addEventListener("click", () => {
    container.classList.add("hide");
    question.value = "";
    answer.value = "";
    addQuestionCard.classList.remove("hide");
});

// Esconder o cartão de criação de flashcard
closeBtn.addEventListener("click", () => {
    container.classList.remove("hide");
    addQuestionCard.classList.add("hide");

    if (editBool) {
        editBool = false;
        SubmitQuestion();
    }
});

// Enviar pergunta
cardButton.addEventListener("click", SubmitQuestion = () => {
    editBool = false;
    const tempQuestion = question.value.trim();
    const tempAnswer = answer.value.trim();

    if (!tempQuestion || !tempAnswer) {
        errorMessage.classList.remove("hide");
    } else {
        container.classList.remove("hide");
        errorMessage.classList.add("hide");
        viewlist();
        question.value = "";
        answer.value = "";
    }
});

// Gerar cartão
function viewlist() {
    const listCard = document.getElementsByClassName("card-list-container");
    const div = document.createElement("div");
    div.classList.add("card");

    // Pergunta
    div.innerHTML += `
    <p class="question-div">${question.value}</p>`;

    // Resposta
    const displayAnswer = document.createElement("p");
    displayAnswer.classList.add("answer-div", "hide");
    displayAnswer.innerHTML = answer.value;

    //para mostrar/esconder a resposta
    var link = document.createElement("a")
    link.setAttribute("href", "#")
    link.setAttribute("class", "show-hide-btn")
    link.innerHTML = "Show/Hide"
    link.addEventListener("click", () =>{
        displayAnswer.classList.toggle("hide")
    })

    div.appendChild(link)
    div.appendChild(displayAnswer);

    //editando butao
    let buttonsCon = document.createElement("div")
    buttonsCon.classList.add("buttons-con")
    var editButton = document.createElement("button")
    editButton.setAttribute("class", "edit")
    editButton.innerHTML = `<i class = "fa-solid fa-pen-to-square"></i>`
    editButton.addEventListener("click", () =>{
        editBool = true
        modifyElement(editButton, true)
        addQuestionCard.classList.remove("hide")
    })
    buttonsCon.appendChild(editButton)
    disableButtons(false)


    //delete button
    var deleteButton = document.createElement("button")
    deleteButton.setAttribute("class", "delete")
    deleteButton.innerHTML = `<i class= "fa-solid fa-trash-can"></i>`
    deleteButton.addEventListener("click", () =>{
        modifyElement(deleteButton)
    })
    buttonsCon.appendChild(deleteButton)


    div.appendChild(buttonsCon)

    listCard[0].appendChild(div);
    hideQuestion();
}

function hideQuestion() {
    addQuestionCard.classList.add("hide");
    container.classList.remove("hide");
}


//modify elements
const modifyElement = (element, edit = false) =>{
    let parentDiv = element.parentElement.parentElement
    let parentQuestion = parentDiv.querySelector(".question-div").innerText

    if(edit){
         let parentAns = parentDiv.querySelector(".answer-div").innerText
         answer.value = parentAns
         question.value = parentQuestion
         disableButtons(true)
    }
    parentDiv.remove()
}


//disable edit and delete buttons
const disableButtons = (value) =>{
    let editButtons = document.getElementsByClassName("edit")
    Array.from(editButtons).forEach(element =>{
        element.disabled = value 
    })
}