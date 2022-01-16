const inputForm = document.querySelectorAll('input#name-input')
console.log(inputForm)

inputForm.addEventListener('input', onInputChange)

function onInputChange(event){
console.log(event.currentTarget.value)
}