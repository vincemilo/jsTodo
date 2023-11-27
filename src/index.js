import header from "./header";
import newTask from "./newTask";
import Task from "./task";
import { projects } from './projects'
import './style.css';

let projectList = projects.getProjects();

function addTaskToProject(projName, task){
    const result = projectList.find(o => o.name === projName);
    //result.assignTask(task);
    console.log(result.tasks[0]);
};

const content = document.getElementById('content');

content.appendChild(header());
content.appendChild(newTask());

const navButtons = document.querySelector('.nav-buttons');

navButtons.addEventListener('click', (e) => {
    let main = document.querySelector('main');
    let button = e.target.className;
    if (button === 'projects btn'){
        main.textContent = 'projects';
        //content.replaceChild(home(), main);
    } else if (button === 'new btn'){
        //content.replaceChild(newTask(), main);
    };
});

const taskForm = document.querySelector('.new-task');
const buttons = document.querySelector('.buttons');
const project = document.querySelector('.project');

buttons.addEventListener('click', (e) => {
    //let currentMain = document.querySelector('main');
    //let blankMain = () => document.createElement('main');
    if (e.target.id === 'submit'){
        const data = new FormData(taskForm);
        const task = new Task;
        //console.log(data);
        for (const entry of data) {
            //console.log(entry[0].replace(/\s/g, ''));
            task[entry[0].replace(/\s/g, '').toLowerCase()] = entry[1];
        };
        console.log(task);
        //addTaskToProject(task.project, task);
    } else if (e.target.id === 'cancel'){
        let main = document.querySelector('main');
        console.log('cancel');
        //console.log(currentMain);
        //console.log(blankMain());
        //content.replaceChild(blankMain(), currentMain);
    };
    e.preventDefault();
});

project.addEventListener('change', (e) => {
    const input = document.getElementById('Add To New Project');
    if (e.target.value === "Add to New Project"){
        input.disabled = false;
        console.log(input);
    } else {
        input.innerText = '';
        input.disabled = true;
    };
})

