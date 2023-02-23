import './style.css';
import Icon from './ellipsis-vertical-solid.svg';
// import Refresh from './arrows-rotate-solid.svg';


// const container = document.querySelector('.container');
const generatedList = document.querySelector('.generated-list');

// container.innerHTML = ` 
//     <div class="add-list">
//             <h1>Today's To Do</h1>
//             <div class="input-field">
//                 <input type="text" placeholder="Add your list...">
//                 <img class="submit-btn" src="${Refresh}">
//             </div>
//     </div>

//         <div class="generated-list">

//         </div>

//     <button class="clear-all">Clear all completed</button>`;


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


let sortedList = list.sort(
    (l1, l2) => (l1.index > l2.index) ? 1 : (l1.index < l2.index) ? -1 : 0);

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
