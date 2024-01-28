import editBtnListeners from "./editBtnListeners";
import newTask from "./newTask";
import { projects } from "./projects";

export default function taskDetails(task, taskDiv){
    //console.log(taskDiv.className);
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('task-descrip');
    descriptionDiv.innerText = task['description'];
    const taskContainer = taskDiv.parentElement;
    if (taskDiv.classList.contains('toggle')){
        taskDiv.nextSibling.remove();
        taskDiv.classList.toggle('toggle');
    } else if (taskDiv.classList.contains('task')){
        //console.log(taskContainer);
        const btns = document.createElement('div');
        const editBtn = document.createElement('button');
        const delBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        delBtn.innerText = 'Delete';
        btns.classList.add('buttons');
        btns.addEventListener('click', (e) => {
            const project = projects.getProjects().find(( { name }) => name === task.project);
            const taskIndex = project.tasks.findIndex(( { id }) => id === task.id);
            if (e.target.innerText === 'Edit'){
                taskContainer.innerText = '';
                let editForm = newTask(task['title'], task['date'], task['project'], task['priority'], task['description']);
                taskContainer.appendChild(editForm);
                editBtnListeners(taskContainer.lastChild, task, project)
                //console.log('Edit');
            } else if ((e.target.innerText === 'Delete')){
                project.tasks.splice(taskIndex, 1);
                //console.log(project.tasks);
                taskContainer.remove();
                //console.log('Delete');
            };
        });
        btns.appendChild(editBtn);
        btns.appendChild(delBtn);
        descriptionDiv.appendChild(btns);
        taskContainer.appendChild(descriptionDiv);
        taskDiv.classList.toggle('toggle');
    };
    
    
};