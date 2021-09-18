// JavaScript Document
console.log('Hello')
var menuButton = document.querySelector("button"); 
var navigatieMenu = document.querySelector("nav"); 

function toonMenu() { 
navigatieMenu.classList.remove("navigatieMenu"); 
   
}


menuButton.addEventListener("click", toonMenu); 