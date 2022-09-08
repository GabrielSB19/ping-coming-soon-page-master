"use strict";

let inputEmail = document.getElementById("email");
let button = document.getElementById("submit");

button.addEventListener("click", (e) => {
    e.preventDefault();
    showMessage(validateEmail(inputEmail.value));
})


const validateEmail = email => {
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return expReg.test(email);
}

const showMessage = val => {
    if(!val){
        inputEmail.style.border = '1px solid red';
        error.style.visibility = 'visible';
    } else {
        inputEmail.style.border = '1px solid hsl(223, 87%, 63%)';
        error.style.visibility = 'hidden';
        inputEmail.value = '';
    }
}