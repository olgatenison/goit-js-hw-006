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
//refs.destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function createBoxes(amount){
  //amount = refs.input.value
  //console.log(amount)
}
//function destroyBoxes(){
//  refs.boxes.innerHTML = '';
//}