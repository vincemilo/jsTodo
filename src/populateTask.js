import taskDetails from "./taskDetails";

export default function populateTask(task, parent){
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.innerText = '';
    if (task.priority === 'on'){ 
        parent.classList.add('priority'); 
    } else if (task.priority === 'off'){
        parent.classList.remove('priority');
    }
    taskDiv.addEventListener('click', () => taskDetails(task, taskDiv));
    const titleDiv = document.createElement('div');
    const dateDiv = document.createElement('div');
    titleDiv.innerText = task['title'];
    dateDiv.innerText = task['date'];
    taskDiv.appendChild(titleDiv);
    taskDiv.appendChild(dateDiv);
    return taskDiv;    
};