//Напиши скрипт создания и очистки коллекции элементов. 
//Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
//после чего рендерится коллекция. 
//При нажатии на кнопку Очистить, коллекция элементов очищается.


const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector("#boxes"),
  
}

refs.createBtn.addEventListener("click", createBoxes);
refs.destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function createBoxes(amount){
  amount = refs.input.value
  let size = 30;
  for (let i = 0; i < amount; i++) {
   size += 10; 

  const newBoxes = document.createElement("div"); 
  newBoxes.style.width = `${size}px`;  
  newBoxes.style.height = `${size}px`;   
  newBoxes.style.backgroundColor = getRandomHexColor();
  newBoxes.style.margin = '10px';  

  boxes.append(newBoxes);  
 
}
}
function destroyBoxes(){
//refs.boxes.remove(newBoxes);
refs.boxes.innerHTML = '';
}