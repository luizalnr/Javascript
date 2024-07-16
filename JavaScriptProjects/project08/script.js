// Initial references 
let submitButton = document.getElementById("submit-button");
let userInput = document.getElementById("user-input");
let canvas = document.getElementById("canvas");
let reloadButton = document.getElementById("reload-button");
let text = "";

// Generate text
const textGenerator = () => {
    let generatedText = "";
    /* String.fromCharCode gives ASCII value from a given number */
    // Total 9 letters hence loop of 3

    for (let i = 0; i < 3; i++) {
        // 65-90 numbers are capital letters
        generatedText += String.fromCharCode(randomNumber(65, 90));

        // 97-122 are small letters
        generatedText += String.fromCharCode(randomNumber(97, 122));

        // 48-57 are numbers from 0-9
        generatedText += String.fromCharCode(randomNumber(48, 57));
    }

    return generatedText;
}

// Generate random numbers between a given range
const randomNumber = (min, max) => 
    Math.floor(Math.random() * (max - min + 1) + min);

// Canvas part
function drawStringOnCanvas(string) {
    // The getContext() function returns the drawing context that has all the drawing properties and functions needed to draw on canvas
    let ctx = canvas.getContext("2d");

    // Clear canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Array of text color
    const textColors = ["rgb(0, 0, 0)", "rgb(130, 130, 130)"];

    // Space between letters
    const letterSpace = 150 / string.length;

    // Loop through string
    for (let i = 0; i < string.length; i++) {
        // Define initial space on X axis
        const xInitialSpace = 25;

        // Set font for canvas element
        ctx.font = "20px Rubik";

        // Set text color
        ctx.fillStyle = textColors[randomNumber(0, 1)];
        ctx.fillText(
            string[i],
            xInitialSpace + i * letterSpace,
            randomNumber(25, 40),
            100
        );
    }
}

// Initial function
const triggerFunction = () => {
    // Clear input
    userInput.value = "";
    text = textGenerator();

    console.log(text);

    // Randomize the text so that every time the position of numbers and small letters is random
    text = [...text].sort(() => Math.random() - 0.5).join("");

    drawStringOnCanvas(text);
}

// Call triggerFunction for reload button
reloadButton.addEventListener("click", triggerFunction);

// Call triggerFunction when page loads
window.onload = () => triggerFunction();

// When user clicks on submit
submitButton.addEventListener("click", () => {
    // Check if user input == generated text
    if (userInput.value === text) {
        alert("Success!");
    } else {
        alert("Try again!");
        triggerFunction();
    }
});
