
document.getElementById("add-task-btn").addEventListener("click", function () {
    const todoList = document.getElementById('task-input').value;

    if (todoList) {
        const li = document.createElement('li');
        li.textContent = todoList;
        document.getElementById('task-list').appendChild(li);
    } else {
        alert("Please enter task details.")
    }
});
