import header from "./header";
import newTask from "./newTask";
import buttonListeners from "./buttonListeners";
//import { projects } from "./projects";
import displayProjects from "./displayProjects";
import addTaskToProject from "./addTaskToProject";
import Task from "./task";
import './style.css';

const content = document.getElementById('content');
const main = document.createElement('main');

content.appendChild(header());
content.appendChild(main);

const task = new Task('blah', '10/10/2020', 'Uncategorized', 'on', 'blah');
const task2 = new Task('blahdsf', '10/12/2020', 'Uncategorized', 'off', 'blah34');

addTaskToProject('Uncategorized', task);
addTaskToProject('Uncategorized', task2);
displayProjects();

const navButtons = document.querySelector('.nav-buttons');

navButtons.addEventListener('click', (e) => {
    // let main = document.querySelector('main');
    let button = e.target.className;
    if (button === 'projects btn'){
        main.innerText = '';
        displayProjects();
    } else if (button === 'new btn'){
        const taskForm = document.querySelector('.new-task');
        if (taskForm === null) {
            main.innerText = '';
            main.appendChild(newTask());
            buttonListeners();
        } else {
            main.innerText = '';
            main.appendChild(newTask());
            buttonListeners();
        };
    };
});