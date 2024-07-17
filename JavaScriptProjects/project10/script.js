const items = document.querySelectorAll(".item")
let imageURLs = ["cat01.png", 
    "cat02.png", 
    "cat03.png", 
    "cat04.png", 
    "cat05.png",]

//initially empty
let devicecType = ""
let events = {
    mouse:{
        start: "mouseover",
        end:   "mouseover",
    },
    touch{
        start: "touchstart",
        end:   ""
    }
}