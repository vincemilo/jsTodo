import Task from "./task";
import addTaskToProject from "./addTaskToProject";
import newBtn from "./newBtn";
import displayProjects from "./displayProjects";
import { projects } from "./projects";
import displayTasks from "./displayTasks";

export default function buttonListeners(){
    const buttons = document.querySelector('.buttons');
    buttons.addEventListener('click', (e) => {
    const taskForm = document.querySelector('.new-task');
    //console.log(taskForm);
    //let currentMain = document.querySelector('main');
    //let blankMain = () => document.createElement('main');
    if (e.target.id === 'submit'){
        if (taskForm.checkValidity() === false) {
            taskForm.reportValidity();
            return;
        };
        const data = new FormData(taskForm);
        const task = new Task;
        //console.log(data);
        for (const entry of data) {
            task[entry[0].replace(/\s/g, '-').toLowerCase()] = entry[1];
        };
        //console.log(task.Project);
        const projId = addTaskToProject(task.project, task);
        const main = document.querySelector('main');
        main.innerText = '';
        displayProjects();
        newBtn();
        const project = projects.getProject(projId);
        const tasks = displayTasks(project.tasks);
        const newTaskDisplay = document.getElementById(projId);
        newTaskDisplay.parentElement.appendChild(tasks);
        newTaskDisplay.classList.add('toggle');
    } else if (e.target.id === 'cancel'){
        taskForm.remove();
        newBtn();
    };
        e.preventDefault();
    });
    
    const project = document.querySelector('.add-to-existing-project');
    const input = document.getElementById('add-to-new-project');
    if (projects.getProjects().length === 1){
        input.disabled = false;
        input.required = true;
    };
    project.addEventListener('change', (e) => {
        //console.log(e.target.value);
        if (e.target.value === "Add To New Project"){
            input.disabled = false;
            input.required = true;
            //console.log(input);
        } else {
            input.innerText = '';
            input.disabled = true;
        };
    });
};