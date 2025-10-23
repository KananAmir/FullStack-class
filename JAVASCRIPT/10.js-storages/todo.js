const todoForm = document.getElementById('todoForm');
const todoList = document.getElementById('todoList');

const todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const titleInput = document.getElementById('todoInput');

    const newTodo = {
        id: Date.now(),
        title: titleInput.value,
        completed: false,
        createdAt: new Date().toLocaleString()
    }

    
    todos.push(newTodo);
    // console.log(todos);
    renderTodos(todos);
    localStorage.setItem('todos', JSON.stringify(todos));

    event.target.reset();

})


const renderTodos = (todos) => {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = `${todo.title} - Created at: ${todo.createdAt}`;
        todoList.appendChild(li);
    });
}

window.addEventListener('load', () => {
    renderTodos(todos);
});

// {
//     id: 1,
//     title: 'Learn JavaScript',
//     completed: false,
//     createdAt: new Date()
// }