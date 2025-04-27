// adding to do list on click
document.getElementById("add-task-btn").addEventListener("click", function () {
    const todoList = document.getElementById('task-input').value;
    var taskCount = "";

    if (todoList) {
        // add task list
        const li = document.createElement('li');
        li.textContent = todoList;
        document.getElementById('task-list').appendChild(li);

        // count task list and set
        taskCount = document.querySelectorAll('#task-list li').length; //get list length
        document.getElementById('count-task').innerHTML = `Total Tasks: ${taskCount}`; // set total task
    } else {
        alert("Please enter task details.");
    }
});

// delete onClick
document.getElementById('delete-all-btn').addEventListener('click', function () {
    document.getElementById('confirmModal').style.display = 'block';

});

// Confirm "Yes"
document.getElementById('confirmYes').onclick = function () {

    // get the values of list
    const values = document.querySelectorAll('#task-list li').length; // get length 


    if (values) {
        // remove all ul li
        const list = document.getElementById('task-list');
        list.innerHTML = ''; // remove all list

        // task count
        const totalTask = document.getElementById('count-task');
        totalTask.innerHTML = "Total Tasks: 0";
    }
    document.getElementById('confirmModal').style.display = 'none';// hide confirm model
};

// Confirm "Cancel"
document.getElementById('confirmNo').onclick = function () {
    document.getElementById('confirmModal').style.display = 'none';
};

