
const  colorRefs = {
  body: document.querySelector('body'),
  descr: document.querySelector('.color'),
  btn: document.querySelector('.change-color'),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
colorRefs.btn.addEventListener ('click', changeBgColor);

function changeBgColor (event){

  colorRefs.body.style.backgroundColor = getRandomHexColor();
  colorRefs.descr.textContent = `${getRandomHexColor()}`;
 
}
