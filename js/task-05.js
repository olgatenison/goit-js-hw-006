const inputForm = document.querySelector('input#name-input');
console.log(inputForm);
const nameLabel = document.querySelector('#name-input');
console.log(nameLabel);
const nameOutput = document.querySelector('#name-output > span');
console.log(nameOutput);



inputForm.addEventListener('input', onInputChange)

function onInputChange(event){
console.log(event.currentTarget.value)
nameLabel.textContent = event.currentTarget.value
    
    if(event.currentTarget.value === "")
{nameLabel.textContent = "Anonymous"} 
else {nameLabel.textContent = event.currentTarget.value
}
}
