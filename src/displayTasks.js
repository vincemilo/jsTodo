import populateTask from "./populateTask";

export default function displayTasks(tasks){
    //console.log(tasks);
    const tasksDiv = document.createElement('div');
    tasksDiv.className = 'tasks';
    for (let task of tasks){
        const taskContainer = document.createElement('div');
        taskContainer.className = 'task-container';
        const taskDiv = populateTask(task, taskContainer);
        taskContainer.appendChild(taskDiv);
        tasksDiv.appendChild(taskContainer);
    };
    return tasksDiv;
}