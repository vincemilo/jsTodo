import taskDetails from "./taskDetails";

export default function displayTasks(tasks){
    //console.log(tasks);
    const tasksDiv = document.createElement('div');
    tasksDiv.className = 'tasks';
    for (let task of tasks){
        const taskContainer = document.createElement('div');
        taskContainer.id = `${task['project']}-${task['title']}`;
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        if (task.priority === 'on'){
            taskContainer.classList.add('priority');
        }
        taskDiv.addEventListener('click', () => taskDetails(task, taskDiv));
        const titleDiv = document.createElement('div');
        const dateDiv = document.createElement('div');
        titleDiv.innerText = task['title'];
        dateDiv.innerText = task['date'];
        taskDiv.appendChild(titleDiv);
        taskDiv.appendChild(dateDiv);
        taskContainer.appendChild(taskDiv);
        tasksDiv.appendChild(taskContainer);
    };
    return tasksDiv;
}