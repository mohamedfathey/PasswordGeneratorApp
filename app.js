const lowercaseletters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseletter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "123456789";
const symbols = "+-*/}:{':;><&^%$#@!~?/|.(),-_=";


const lenghtEL = document.getElementById("lenght");
const lowercaseEl=document.getElementById("lawercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const genrateBtn = document.getElementById("generate");
const passwordEL = document.getElementById("password");
genrateBtn.addEventListener("click",function(){

    const lenght= lenghtEL.value;
    let characters = "";
    let password ="";

    if( lowercaseEl.checked ){
        characters+=lowercaseletters;
    }

    if( uppercaseEl.checked ){
        characters+=uppercaseletter;
    }

    if( numbersEl.checked ){
        characters+=numbers;
    }

    if( symbolsEl.checked ){
        characters+=symbols;
    }

    for(let i = 0 ; i < lenght ; i++){
        password+=characters.charAt(Math.floor(Math.random()*characters.length));
    }

    passwordEL.value=password;
});