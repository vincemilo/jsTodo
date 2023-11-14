import header from "./header";
import newTask from "./newTask";
import Task from "./task";
import { projects } from './projects'
import './style.css';

let projectList = projects.getProjects();

function addTaskToProject(projName, task){
    const result = projectList.find(o => o.name === projName);
    result.assignTask(task);
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
        main.textContent = 'new task';
    };
});

const taskForm = document.querySelector('.new-task');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (e) => {
    //let currentMain = document.querySelector('main');
    //let blankMain = () => document.createElement('main');
    if (e.target.id === 'submit'){
        const data = new FormData(taskForm);
        const task = new Task;
        for (const entry of data) {
            task[entry[0].toLowerCase()] = entry[1];
        };
        //console.log(task.project);
        addTaskToProject(task.project, task);
    } else if (e.target.id === 'cancel'){
        let main = document.querySelector('main');
        main.innerText = '';
        //console.log(currentMain);
        //console.log(blankMain());
        //content.replaceChild(blankMain(), currentMain);
    };
    e.preventDefault();
});

//const randomTask = new Task('Lunch', '01/01/1991', 'generic project', 'blah');
//addTaskToProject(randomTask);

