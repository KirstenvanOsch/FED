// JavaScript Document
var menuButton = document.querySelector("button"); 
var navigatieMenu = document.querySelector("nav"); 

function toonMenu() { 
navigatieMenu.classlist.add(".navigatieMenu"); 
   
}


menuButton.addEventListener("click", toonMenu); 