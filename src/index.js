import './style.css';

import Arrows from './arrows-rotate-solid.svg';
import Download from './download.svg';
import Icon from './trash-solid.svg';
import Edit from './edit.svg';

import * as htmlHolder from './modules/innerHtml.js';
import * as classObject from './modules/todoClass.js';

htmlHolder.innerHtmlHolder(Arrows, Download);
const addListBtn = document.querySelector('.add-list-btn');
const inputValue = document.querySelector('.input-field-add');

const clearAll = document.querySelector('.clear-all');

const displayTodo = () => {
  const displayTodo = classObject.list.map((item) => `
    <div class='todo-lists' id=${item.id}>
        <div class='check-parag'>
           <input type="checkbox" class='check-box' data-id=${item.id} ${item.completed}>
            <p class='todo-paragraph'>${item.description}</p>
        </div>
            
      
        <div class="icon-holder" >
          <span class='edit-btn-span' ><img src='${Edit}' class='edit-btn' data-id=${item.id}></span>
          <img src='${Icon}' class='delete-btn' data-id=${item.id}>
          
        </div>
    </div>
 `);

  classObject.generatedList.innerHTML = (displayTodo).join('');
};

displayTodo();

let id;
addListBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputValue.value !== '') {
    id = Math.floor(Math.random() * 10000);
    let n;
    const listObj = new classObject.ListObj(inputValue.value, false, n, id);
    classObject.list.push(listObj);
    inputValue.value = '';
    displayTodo();
    classObject.removeTodo();
    for (let i = 0; i < classObject.list.length; i += 1) {
      n = i + 1;
      classObject.list[i].index = n;
    }
    classObject.addToStorage(classObject.list);
  }
});

classObject.generatedList.addEventListener('click', classObject.deleteDone);
clearAll.addEventListener('click', () => {
  classObject.clear();
  displayTodo();
});

window.addEventListener('DOMContentLoaded', () => {
  displayTodo();
  classObject.removeTodo();
  classObject.editBtn();
});
