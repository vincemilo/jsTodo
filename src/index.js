import header from "./header";
import newTask from "./newTask";
import buttonListeners from "./buttonListeners";
import { projects } from "./projects";
import './style.css';

const content = document.getElementById('content');

content.appendChild(header());
content.appendChild(newTask());
buttonListeners();

const navButtons = document.querySelector('.nav-buttons');

navButtons.addEventListener('click', (e) => {
    // let main = document.querySelector('main');
    let button = e.target.className;
    if (button === 'projects btn'){
        console.log('projects');
        //content.replaceChild(home(), main);
    } else if (button === 'new btn'){
        const taskForm = document.querySelector('.new-task');
        if (taskForm === null) {
            content.appendChild(newTask());
            buttonListeners();
        } else {
            taskForm.remove();
            content.appendChild(newTask());
            buttonListeners();
        };
    };
});