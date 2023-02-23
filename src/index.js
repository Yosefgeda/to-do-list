import './style.css';

const list = [
  {
    description: 'Grocery Shopping',
    completed: false,
    index: 1,
  },
  {
    description: 'Finish Homeworks',
    completed: false,
    index: 2,
  },
  {
    description: 'Pay Bills',
    completed: false,
    index: 3,
  },
];
const generatedList = document.querySelector('.generated-list');

const displayTodo = () => {
  const displayTodo = list.map((item) => `
    <div class='todo-lists'>
        <input type="checkbox" class='check-box' id='${item.index}'>
        <p class='todo-paragraph'>${item.description}</p>
        <button class='delete-btn'>Delete</button>
    </div>
 `);

  generatedList.innerHTML = (displayTodo).join('');
};

displayTodo();
