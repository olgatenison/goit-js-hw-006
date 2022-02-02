//Напиши скрипт создания и очистки коллекции элементов. 
//Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
//после чего рендерится коллекция. 
//При нажатии на кнопку Очистить, коллекция элементов очищается.


const Refs = {
  input: document.querySelector('input'),

  cerate = document.querySelector('[data-create]'),
  destroy = document.querySelector('[data-destroy]'),
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function createBoxes(amount){

};

function destroyBoxes(){

}