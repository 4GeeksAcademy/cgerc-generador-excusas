import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};


function generadorExcusas(){
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
}

function generadorExcusas(){
let whoAleatorio= who[Math-floor( Math.random() * who.length)]; 
let actionAleatorio= action[ Math.floor( Math.random() * action.length)];
let whatAleatorio= what[ Math.floor( Math.random() * what.length)];
let whenAleatorio= when[ Math.floor( Math.random() * when.length)];

let generadorExcusas= whoAleatorio+ ' '+ actionAleatorio + ' ' + whatAleatorio + ' '+ whenAleatorio + ' ';
return generadorExcusas;
}

let p - document.querySelector("excuse");
p.innerHTML = generadorDeExcusas()