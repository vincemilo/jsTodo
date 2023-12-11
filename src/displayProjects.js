import { projects } from "./projects";
import displayTasks from "./displayTasks";
import taskDetails from "./taskDetails";

export default function displayProjects(){
    const main = document.querySelector('main');
    const projectsDiv = document.createElement('div');
    const projectList = projects.getProjects();
    projectsDiv.className = 'projects';
    for (let project of projectList){
        if (project.name === "Add To New Project"){
            continue;
        } else {
            const projContainer = document.createElement('div');
            const proj = document.createElement('div');
            proj.className = 'project';
            proj.innerText = project.name;
            projContainer.appendChild(proj);
            projContainer.addEventListener('click', (e) => {
                //console.log(e.target.className);
                if (e.target.className === 'project'){
                projContainer.appendChild(displayTasks(project.tasks));
                } else {
                    console.log(e.target.parentElement.parentElement);
                    //const tasks = document.getElementById(project.name);
                    //projContainer.removeChild(tasks);
                }
            });
            projectsDiv.appendChild(projContainer);    
        };
        main.appendChild(projectsDiv);
    };
}