import taskDetails from "./taskDetails";

export default function populateTask(form, task){
    const taskDiv = form;
    taskDiv.className = 'task';
    taskDiv.innerText = '';
    if (task.priority === 'on'){ 
        taskDiv.parentElement.classList.add('priority'); 
    } else if (task.priority === 'off'){
        taskDiv.parentElement.classList.remove('priority');
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