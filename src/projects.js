import Project from './project';

export const projects = (function () {
    const list = [new Project('Uncategorized'), new Project('Add To New Project')];
    const getProjects = () => list;
    const setProjects = (project) => {
        const index = projIndex(project.id);
        if (list[index] === undefined){
            list.push(new Project(project.name, project.tasks, project.id));
        } else {
            list[index] = new Project(project.name, project.tasks, project.id);
        };
    };
    const projIndex = (index) => list.findIndex(e => e.id === index);
    const delProject = (index) => list.splice(projIndex(index), 1);
    const getProject = (index) => list.find((e) => e.id === index);
    return { getProjects, setProjects, delProject, getProject };
})();