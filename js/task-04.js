
const counterValue = document.querySelector("#value");
console.log(counterValue.textContent) 

const minusValue = document.querySelector('button[data-action="decrement"]');
minusValue.addEventListener('click', handndleMinusBtnClick);

function handndleMinusBtnClick (){
   console.log('-') 
}

const plusValue = document.querySelector('button[data-action="increment"]');
plusValue.addEventListener('click', handndlePlusBtnClick);

function handndlePlusBtnClick (){
 console.log('+')   
}