import './style.css';

import Arrows from './arrows-rotate-solid.svg';
import Download from './download.svg';
import Icon from './trash-solid.svg';

import * as htmlHolder from './modules/innerHtml.js';
import * as classObject from './modules/todoClass.js';

htmlHolder.innerHtmlHolder(Arrows, Download);
const addListBtn = document.querySelector('.add-list-btn');
const inputValue = document.querySelector('.input-field-add');

let id;
addListBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputValue.value !== '') {
    id = Math.floor(Math.random() * 10000);
    let n;
    const listObj = new classObject.ListObj(inputValue.value, false, n, id);
    classObject.list.push(listObj);
    inputValue.value = '';
    classObject.displayTodo(Icon);
    classObject.removeTodo();
    for (let i = 0; i < classObject.list.length; i += 1) {
      n = i + 1;
      classObject.list[i].index = n;
    }
    classObject.addToStorage(classObject.list);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  classObject.displayTodo();
  classObject.removeTodo();
});
