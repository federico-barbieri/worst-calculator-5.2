"use strict";

// grab first number 

let firstNumber = document.querySelector('#firstnumber').value;

// grab second number

let secondNumber = document.querySelector('#secondnumber').value;

// grab operators
const operatorSelector = document.querySelector('#operator');

// grab calculate btn

const calculateBtn = document.querySelector('#calculate');

// grab list of results to append new results

const resultsList = document.querySelector('#results');

// create a function for the 4: 
//addition, substraction, multiplication and division

function checkOperator(){
    if (operatorSelector.value == "add"){
        return parseInt(firstNumber) + parseInt(secondNumber);
    } else if (operatorSelector.value == "sub"){
        return parseInt(firstNumber) - parseInt(secondNumber);
    } else if (operatorSelector.value == "mul"){
        return parseInt(firstNumber) * parseInt(secondNumber);
    } else if (operatorSelector.value == "div"){
        return parseInt(firstNumber) / parseInt(secondNumber);
    }
}

calculateBtn.addEventListener('click', () =>{
    let newLi = document.createElement('li');
    newLi.innerHTML = checkOperator();
    resultsList.appendChild(newLi);
})