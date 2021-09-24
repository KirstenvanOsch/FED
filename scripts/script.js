// JavaScript Document
console.log('Hello')
var menuButton = document.querySelector("nav p"); 
var navigatieMenu = document.querySelector("nav"); 
body = document.querySelector("body"); 

function toggleMenu(event) { 
    console.log("functie menu")
navigatieMenu = document.querySelector("nav");  
menuButton.classList.toggle("toonMenu"); 
body.classList.toggle("toonMenu"); 

}

menuButton.addEventListener("click", toggleMenu); 



