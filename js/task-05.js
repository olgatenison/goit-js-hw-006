const input = document.querySelectorAll('input#name-input')
console.log(input)

input.addEventListener('change', onInputChange)

function onInputChange(event){
console.log(event.currentTarget.value)
}