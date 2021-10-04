// JavaScript Document
console.log('Hello')
var menuButton = document.querySelector("nav p"); 
var navigatieMenu = document.querySelector("nav"); 
var terugToggle = document.querySelector("body > div"); 
var body = document.querySelector("body");  


function toggleMenu(event) { 
    console.log("functie menu")
navigatieMenu.classList.add("toonMenu"); 
body.classList.add("toonMenu"); 
terugToggle.classList.add("terugKnop")


}

function navigatieTerug() { 

        console.log("div container")
        navigatieMenu.classList.remove("toonMenu"); 
        body.classList.remove("toonMenu");
        terugToggle.classList.remove("terugKnop") 
        


}


menuButton.addEventListener("click", toggleMenu); 
terugToggle.addEventListener("click", navigatieTerug); 