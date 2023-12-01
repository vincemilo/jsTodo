import header from "./header";
import newTask from "./newTask";
import buttonListeners from "./buttonListeners";
import { projects } from "./projects";
import './style.css';

const content = document.getElementById('content');
const main = document.createElement('main');

content.appendChild(header());
content.appendChild(main);
//main.appendChild(newTask());
//buttonListeners();

const navButtons = document.querySelector('.nav-buttons');

navButtons.addEventListener('click', (e) => {
    // let main = document.querySelector('main');
    let button = e.target.className;
    if (button === 'projects btn'){
        main.innerText = '';
        const projectsDiv = document.createElement('div');
        const projectList = projects.getProjects();
        for (let project of projectList){
            if (project.name === "Add To New Project"){
                continue;
            } else {
                const proj = document.createElement('div');
                proj.innerText = project.name;
                proj.addEventListener('click', () => {
                    const ul = document.createElement('ul');
                    const li = document.createElement('li');
                    console.log(project.info);
                });
                projectsDiv.appendChild(proj);    
            };
        }
        
        main.appendChild(projectsDiv);
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