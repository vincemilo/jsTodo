import taskDetails from "./taskDetails";

export default function displayTasks(tasks){
    //console.log(tasks);
    const tasksDiv = document.createElement('div');
    tasksDiv.className = 'tasks';
    tasksDiv.id = tasks[0]['project'];
    for (let task of tasks){
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        taskDiv.dataset.id = task['title'];
        taskDiv.addEventListener('click', () => taskDetails(task, taskDiv));
        const titleDiv = document.createElement('div');
        const dateDiv = document.createElement('div');
        titleDiv.innerText = task['title'];
        dateDiv.innerText = task['date'];
        taskDiv.appendChild(titleDiv);
        taskDiv.appendChild(dateDiv);
        tasksDiv.appendChild(taskDiv);
    };
    return tasksDiv;
}