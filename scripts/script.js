// JavaScript Document
console.log('Hello')
var menuButton = document.querySelector("nav p"); 
var navigatieMenu = document.querySelector("nav"); 
var terugToggle = document.querySelector(".terugKnop"); 
var body = document.querySelector("body");  


function toggleMenu(event) { 
    console.log("functie menu")
navigatieMenu.classList.add("toonMenu"); 
body.classList.add("toonMenu"); 


}

function navigatieTerug() { 
    if (navigatieMenu.classList.contains("toonMenu") +  (body.classList.contains("toonMenu"))) { 
        console.log("div container")
        navigatieMenu.classList.remove("toonMenu"); 
        body.classList.remove("toonMenu"); 
        


}

}
menuButton.addEventListener("click", toggleMenu); 
// terugToggle.addEventListener("click", navigatieTerug); 