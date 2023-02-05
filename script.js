"use strict";

// grab first number 

let firstNumber = document.querySelector('#firstnumber');

// grab second number

let secondNumber = document.querySelector('#secondnumber');

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

       // store addition in a variable

        let combination = parseInt(firstNumber.value) + parseInt(secondNumber.value); 

        // create a new li, change its text content to the previous num
        // and append it 

        let newLi = document.createElement('li');
        newLi.textContent = combination;
        resultsList.appendChild(newLi);

        // change the first value to the combination of 1 + 2

        firstNumber.value = combination;
        
    } else if (operatorSelector.value == "sub"){

               // store addition in a variable

               let combination = parseInt(firstNumber.value) - parseInt(secondNumber.value); 

               // create a new li, change its text content to the previous num
               // and append it 
       
               let newLi = document.createElement('li');
               newLi.textContent = combination;
               resultsList.appendChild(newLi);
       
               // change the first value to the combination of 1 - 2
       
               firstNumber.value = combination;


    } else if (operatorSelector.value == "mul"){

         // store addition in a variable

        let combination = parseInt(firstNumber.value) * parseInt(secondNumber.value); 

         // create a new li, change its text content to the previous num
         // and append it 
            
         let newLi = document.createElement('li');
         newLi.textContent = combination;
         resultsList.appendChild(newLi);
            
         // change the first value to the combination of 1 * 2
            
         firstNumber.value = combination;   



    } else if (operatorSelector.value == "div"){

         // store addition in a variable

         let combination = parseInt(firstNumber.value) / parseInt(secondNumber.value); 

         // create a new li, change its text content to the previous num
         // and append it 
            
         let newLi = document.createElement('li');
         newLi.textContent = combination;
         resultsList.appendChild(newLi);
            
         // change the first value to the combination of 1 / 2
            
         firstNumber.value = combination;   

    }
}

calculateBtn.addEventListener('click', () =>{

        checkOperator();

})