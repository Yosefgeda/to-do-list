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

const generatedList = document.querySelector('.generated-list');
export const displayTodo = (Icon) => {
  const displayTodo = list.map((item) => `
    <div class='todo-lists'>
        <input type="checkbox" class='check-box'>
        <input class='todo-paragraph' value='${item.description}'>
        <img src='${Icon}' class='delete-btn' data-id=${item.id}>
    </div>
 `);

  generatedList.innerHTML = (displayTodo).join('');
};

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
      e.target.parentElement.remove();
    }
    const deleteBtn = e.target.dataset.id;

    removeTodArray(deleteBtn);
  });
};

export const getStorage = () => {
  const storage = localStorage.getItem('todos') === null ? [] : JSON.parse(localStorage.getItem('todos'));
  return storage;
};

list = getStorage();

export { list };