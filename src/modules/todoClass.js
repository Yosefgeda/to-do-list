/* eslint-disable */
let list = [];
export class ListObj {
  constructor(description, completed, index, id) {
    this.description = description,
    this.completed = completed,
    this.index = index,
    this.id = id;
  }
}

export const generatedList = document.querySelector('.generated-list');

export const addToStorage = () => {
  const storage = localStorage.setItem('todos', JSON.stringify(list));
  return storage;
};

export const removeTodArray = (id) => {
  list = list.filter((item) => item.id !== +id);
  addToStorage(list);
};

export const removeTodo = () => {
  generatedList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
      e.target.parentElement.parentElement.remove();
      
      const deleteBtn = e.target.dataset.id;
      removeTodArray(deleteBtn);
    }
    
  });
};

export const getStorage = () => {
  const storage = localStorage.getItem('todos') === null ? [] : JSON.parse(localStorage.getItem('todos'));
  return storage;
};

list = getStorage();

export const editBtn = () => {
    let changeIcon = true;
    generatedList.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-btn')) {
          let value = e.target.parentElement.parentElement.parentElement.childNodes[3];
          const btnId = e.target.dataset.id;
          if(changeIcon) {
            value.setAttribute('contenteditable', 'true');
            value.focus();
            e.target.parentElement.innerHTML = `<button>Save</button>`;
          } else {           
            value.removeAttribute('contenteditable');
            const newList = list.findIndex((item) => item.id === +btnId);
            list[newList].description = value.textContent;
            addToStorage(list);
          }
        }
        changeIcon = !changeIcon;
      });
}

export const deleteDone = (e) => {
  const checked = e.target.closest('.check-box');
  if(!checked) return;
  const cleared = parseInt(checked.getAttribute('data-id'), 10);
  const task = JSON.parse(localStorage.getItem('todos')) || [];
  const find = task.find((todo) => todo.id === cleared);
  find.completed = !find.completed;
 
  localStorage.setItem('todos', JSON.stringify(task));
};

export const clear = (e) => {
  const set = JSON.parse(localStorage.getItem('todos')) || [];
  const notDone = set.filter((list) => !list.completed);
  

  if (notDone.length === 0){
    generatedList.style.display = 'none';
  }
  
  const todoLists = document.querySelector('.todo-lists');

  set.length = 0;
  let i = 1;
  notDone.forEach((element) => {
    element.index = i;
    i += 1;
  });
  set.push(...notDone);

  localStorage.setItem('todos', JSON.stringify(set));
  
};

export { list };