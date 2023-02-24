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
            //  const p = document.querySelector('.todo-paragraph');
          let value = e.target.parentElement.parentElement.parentElement.childNodes[3];
          const btnId = e.target.dataset.id;
          if(changeIcon) {
            value.setAttribute('contenteditable', 'true');
            value.focus();
            e.target.parentElement.innerHTML = `<button>Save</button>`;
          } else {
            e.target.parentElement.innerHTML = `<img src='${Edit}'>`;
            value.removeAttribute('contenteditable');
            const newList = list.findIndex((item) => item.id === +btnId);
            list[newList].description = value.textContent;
            addToStorage(list);
          }
        }
        changeIcon = !changeIcon;
      });
        

}

export { list };