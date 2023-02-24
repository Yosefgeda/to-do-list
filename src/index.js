import './style.css';
import Icon from './ellipsis-vertical-solid.svg';

// const container = document.querySelector('.container');
const generatedList = document.querySelector('.generated-list');

const list = [
  {
    description: 'Grocery Shopping',
    completed: false,
    index: 2,
  },
  {
    description: 'Finish Homeworks',
    completed: false,
    index: 1,
  },
  {
    description: 'Pay Bills',
    completed: false,
    index: 3,
  },
];

const sortedList = list.sort(

  (l1, l2) => (
    (l1.index > l2.index) ? 1 : (l1.index < l2.index) ? -1 : 0
  ),

);

const displayTodo = () => {
  const displayTodo = sortedList.map((item) => `
    <div class='todo-lists'>
        <input type="checkbox" class='check-box' id='${item.index}'>
        <p class='todo-paragraph'>${item.description}</p>
        <img src='${Icon}' class='delete-btn'>
    </div>
 `);

  generatedList.innerHTML = (displayTodo).join('');
};

displayTodo();
