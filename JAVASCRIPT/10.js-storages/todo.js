const todoForm = document.getElementById('todoForm');
const todoList = document.getElementById('todoList');
const errorMessage = document.getElementById('errorMessage');
const titleInput = document.getElementById('todoInput');
const emptyState = document.getElementById('emptyState');
const todoCounter = document.getElementById('todoCounter');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

todoForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const title = titleInput.value.trim();
  if (!title) {
    errorMessage.classList.remove('hidden');
    titleInput.classList.add('border-red-400');
    return;
  }

  const newTodo = {
    id: Date.now(),
    title,
    completed: false,
    createdAt: new Date().toLocaleString(),
  };

  todos.unshift(newTodo);
  saveAndRender();

  Toastify({
    text: "✅ Todo added successfully!",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    duration: 2500
  }).showToast();

  event.target.reset();
  titleInput.classList.remove('border-red-400');
  errorMessage.classList.add('hidden');
});

const renderTodos = (arr) => {
  todoList.innerHTML = '';

  emptyState.classList.toggle('hidden', arr.length > 0);

  arr.forEach(todo => {
    const li = document.createElement('li');
    li.className = `
      flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-3 
      shadow-sm hover:shadow-md transition duration-200
    `;

    const left = document.createElement('div');
    left.className = "flex items-center gap-3";

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.className = "h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500";

    checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked;
        saveAndRender();
    })
    const titleSpan = document.createElement('span');
    titleSpan.textContent = todo.title;
    titleSpan.className = `
      text-sm ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}
      transition
    `;

    left.append(checkbox, titleSpan);

    const right = document.createElement('div');
    right.className = "flex items-center gap-2";

    const date = document.createElement('span');
    date.className = "text-xs text-gray-400";
    date.textContent = todo.createdAt;

    const delBtn = document.createElement('button');
    delBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500 hover:text-red-600 transition" 
           fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
              d="M6 18L18 6M6 6l12 12" />
      </svg>
    `;

    delBtn.addEventListener('click', () => {
      todos = todos.filter(t => t.id !== todo.id);
      saveAndRender();

      Toastify({
        text: "🗑️ Todo deleted successfully!",
        style: { background: "linear-gradient(to right, #ff5f6d, #ffc371)" },
        duration: 2500
      }).showToast();
    });

    right.append(date, delBtn);
    li.append(left, right);
    todoList.appendChild(li);
  });
};



function updateCounter() {
  const count = todos.length;
  todoCounter.textContent = `${count} item${count !== 1 ? 's' : ''}`;
}

titleInput.addEventListener('input', () => {
  if (titleInput.value.trim()) {
    errorMessage.classList.add('hidden');
    titleInput.classList.remove('border-red-400');
  }
});

window.addEventListener('load', saveAndRender);

function saveAndRender() {
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos);
  updateCounter();
}