//Напиши скрипт, который изменяет цвета фона элемента <body> 
//через инлайн стиль при клике на button.change-color 
//и выводит значение цвета в span.color.

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
  const bgColor = getRandomHexColor();
  colorRefs.body.style.backgroundColor = `${bgColor}`
  colorRefs.descr.textContent = `${bgColor}`;
}
