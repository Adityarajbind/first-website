

let title = ["Demon Slayer Goated", "ANIME is PeaK", "ONE PIECE"]
let discription = ["\"Your wounds will heal. If there's a breath in you, it's not over yet. There's nothing more resilient than a human life.\"", "\" The longer you live... The more you realize that reality is just made of pain, suffering, and emptiness.\"", "\"Nothing Happened\""]
let author = ["- Tanjiro Kamado", "- Madara Uchiha", "- Roronoa Zoro"]
let dot_1 = true
let dot_2 = false
let dot_3 = false
// document.getElementById("slides").style.backgroundImage="url(img1.jfif)"

function dot1() {
    document.getElementById("slides").style.backgroundImage = "url(img1.jfif)"
    document.querySelector(".back-title").innerHTML = `${title[0]}`
    document.querySelector(".descirtion").innerHTML = `${discription[0]}`
    document.querySelector(".author").innerHTML = `${author[0]}`
    document.querySelector(".dot3").style.backgroundColor = "white"
    document.querySelector(".dot2").style.backgroundColor = "white"
    document.querySelector(".dot1").style.backgroundColor = "#333"
    dot_1 = true
    dot_3 = false
    dot_2 = false
}
function dot2() {
    document.getElementById("slides").style.backgroundImage = "url(img2.jpg)"
    document.querySelector(".back-title").innerHTML = `${title[1]}`
    document.querySelector(".descirtion").innerHTML = `${discription[1]}`
    document.querySelector(".author").innerHTML = `${author[1]}`
    document.querySelector(".dot1").style.backgroundColor = "white"
    document.querySelector(".dot3").style.backgroundColor = "white"
    document.querySelector(".dot2").style.backgroundColor = "#333"
    dot_1 = false
    dot_2 = true
    dot_3 = false

}
function dot3() {
    document.getElementById("slides").style.backgroundImage = "url(img3.jpeg)"
    document.querySelector(".back-title").innerHTML = `${title[2]}`
    document.querySelector(".descirtion").innerHTML = `${discription[2]}`
    document.querySelector(".author").innerHTML = `${author[2]}`
    document.querySelector(".dot1").style.backgroundColor = "white"
    document.querySelector(".dot2").style.backgroundColor = "white"
    document.querySelector(".dot3").style.backgroundColor = "#333"
    dot_2 = false
    dot_3 = true
    dot_1 = false


}
function right() {
    if (dot_1 == true) {
        dot2()
    }
    else if (dot_2 == true) {
        dot3()
    }
    else if (dot_3 == true) {
        dot1()
    }
}
function left() {
    if (dot_1 == true) {
        dot3()
    }
    else if (dot_2 == true) {
        dot1()
    }
    else if (dot_3 == true) {
        dot2()
    }
}

function toggleMenu(num) {
    // document.querySelector(".mobile-nav").style.display
    Element=document.querySelector(".mobile-nav")
    if (num==1) {
        Element.style.display="none";
    } 
    if(num==0) {
        Element.style.display="flex" 
    }

}