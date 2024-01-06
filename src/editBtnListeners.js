import Task from "./task";
import addTaskToProject from "./addTaskToProject";
import taskDetails from "./taskDetails";

export default function editBtnListeners(form, task){
    console.log(form);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.submitter.id === 'submit'){
            console.log('submit');
        } else {
            console.log(form.parentElement)
            console.log(task);
            const taskDiv = form;
            taskDiv.className = 'task';
            taskDiv.innerText = '';
            taskDiv.addEventListener('click', () => taskDetails(task, taskDiv));
            const titleDiv = document.createElement('div');
            const dateDiv = document.createElement('div');
            titleDiv.innerText = task['title'];
            dateDiv.innerText = task['date'];
            taskDiv.appendChild(titleDiv);
            taskDiv.appendChild(dateDiv);
            console.log('cancel');
        }
        //console.log(e.submitter.id);
    });
};