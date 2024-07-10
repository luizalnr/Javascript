const slides = document.querySelectorAll(".slides img")
let slideIntex = 0
let intervalId = null

//initializeSlider()
document.addEventListener("DOMContentLoaded", initializeSlider)


///
function initializeSlider(){
    if (slides.length > 0){
        slides[slideIntex].classList.add("displaySlide")
        intervalId = setInterval(nextSlide, 4000)
    }

}

function showSlide(index){
    if (index >= slides.length){
        slideIntex = 0
    }
    else if(index < 0){
        slideIntex = slides.length - 1
    }


    slides.forEach(slide => {
        slide.classList.remove("displaySlide")
    })
    slides[slideIntex].classList.add("displaySlide")
}

function prevSlide(){
    clearInterval(intervalId)
    slideIntex--
    showSlide(slideIntex)
}

function nextSlide(){
    slideIntex++
    showSlide(slideIntex)
}