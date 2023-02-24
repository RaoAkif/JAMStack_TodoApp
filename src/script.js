import './style.css';

const title = document.querySelector('title');

title.innerText = 'Page Title';


const todos = [
  {
    description: 'An example description in string',
    completed: false,
    index: 1,
  },
  {
    description: 'An example description in string',
    completed: true,
    index: 3,
  },
  {
    description: 'An example description in string',
    completed: false,
    index: 2,
  },
  {
    description: 'An example description in string',
    completed: false,
    index: 4,
  },
];

const ulElement = document.getElementById('todo-list');

todos.sort((a, b) => a.index - b.index);

todos.forEach(todo => {
  const newTodoListElement = document.createElement('li');
  newTodoListElement.innerHTML = `
    <p>${todo.completed ? '&#9989;' : '&#10060;'}</p>
    <p class="description">${todo.description}</p>
    <div class="edit-button">&#128394;&#65039;</div>
    <div class="delete-button">&#10007;</div>
  `;
  ulElement.appendChild(newTodoListElement);

  const editButton = newTodoListElement.querySelector('.edit-button');
  const deleteButton = newTodoListElement.querySelector('.delete-button');
  const descriptionElement = newTodoListElement.querySelector('.description');

  editButton.addEventListener('click', () => {
    // Handle edit button click
    console.log(`Editing todo with index ${todo.index}`);
  });

  deleteButton.addEventListener('click', () => {
    // Handle delete button click
    todos.splice(todos.indexOf(todo), 1);
    newTodoListElement.remove();
  });
});
