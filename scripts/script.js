// JavaScript Document
console.log('Hello')
var menuButton = document.querySelector("nav p"); 
var navigatieMenu = document.querySelector("nav"); 

function toonMenu(event) { 
navigatieMenu.classList.toggle("toonMenu"); 
   
}


menuButton.addEventListener("click", toonMenu); 


