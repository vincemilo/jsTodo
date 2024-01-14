import Project from './project';

export const projects = (function () {
    const list = [new Project('Uncategorized'), new Project('Add To New Project')];
    const getProjects = () => list;
    const setProjects = (params) => list.push(params);
    const delProject = (index) => list.splice(index, 1);
    const getProject = (index) => list[index];
    return { getProjects, setProjects, delProject, getProject };
})();