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

const task = new Task('blah', '10/10/2020', 'Uncategorized', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
const task2 = new Task('blahdsf', '10/12/2020', 'New Project', 'descrup2', 'on');
const task3 = new Task('blahdsf', '10/12/2020', 'Uncategorized', 'descrup3');

addTaskToProject('Uncategorized', task);
addTaskToProject('New Project', task2);
addTaskToProject('Uncategorized', task3);
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