import { projects } from "./projects";
import displayTasks from "./displayTasks";

export default function displayProjects(){
    const main = document.querySelector('main');
    const projectsDiv = document.createElement('div');
    const projectList = projects.getProjects();
    for (let project of projectList){
        if (project.name === "Add To New Project"){
            continue;
        } else {
            const proj = document.createElement('div');
            proj.className = 'project';
            proj.innerText = project.name;
            proj.addEventListener('click', () => {
                proj.appendChild(displayTasks(project.tasks));
            });
            projectsDiv.appendChild(proj);    
        };
        main.appendChild(projectsDiv);
    };
}