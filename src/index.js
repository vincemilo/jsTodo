import header from "./header";
import newTask from "./newTask";
import './style.css';

const content = document.getElementById('content');

content.appendChild(header());

const main = document.createElement('main');
content.appendChild(main);
content.replaceChild(newTask(), main);

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
    let currentMain = document.querySelector('main');
    let blankMain = () => document.createElement('main');
    if (e.target.id === 'submit'){
        const data = new FormData(taskForm);
        console.log(data);
    } else if (e.target.id === 'cancel'){
        console.log(currentMain);
        console.log(blankMain());
        //content.replaceChild(blankMain(), currentMain);
    };
    e.preventDefault();
});