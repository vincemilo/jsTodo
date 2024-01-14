import { projects } from "./projects";
import displayTasks from "./displayTasks";
import populateProj from "./populateProj";

export default function displayProjects(){
    const main = document.querySelector('main');
    const projectsDiv = document.createElement('div');
    projectsDiv.innerText = 'Projects';
    const projectList = projects.getProjects();
    projectsDiv.className = 'projects';
    for (let project of projectList){
        if (project.name === "Add To New Project"){
            continue;
        } else {
            const projContainer = document.createElement('div');
            projContainer.className = 'project-container';
            const proj = populateProj(project);
            proj.id = project.id;
            projContainer.appendChild(proj);
            const tasks = displayTasks(project.tasks);
            projContainer.addEventListener('click', (e) => {
                //console.log(e.target.className);
                if (e.target.className === 'project'){
                    projContainer.appendChild(tasks);
                    proj.classList.add('toggle');
                } else if (e.target.className === 'project toggle'){
                    proj.nextSibling.remove();
                    proj.classList.remove('toggle');
                } else {
                    //console.log(e.target);
                }
            });
            projectsDiv.appendChild(projContainer);    
        };
    };
    main.appendChild(projectsDiv);
};