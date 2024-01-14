import Project from "./project";
import { projects } from './projects'

const projectList = projects.getProjects();

export default function addTaskToProject(projName, task){
    const result = projectList.find(o => o.name === projName);
    if (result === undefined){
        const project = new Project(projName);
        project.assignTask(task);
        projects.setProjects(project);
        return project.id;
    } else {
        result.assignTask(task);
        return result.id;
    };
    //console.log(projects.getProjects());
};