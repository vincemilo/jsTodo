import Project from './project';

export const projects = (function () {
    const list = [new Project('Uncategorized'), new Project('Add To New Project')];
    const getProjects = () => list;
    const setProjects = (params) => list.push(params);
    const delProject = (index) => {
        const projIndex = list.findIndex(e => e.id === index);
        list.splice(projIndex, 1)
    };
    const getProject = (index) => list.find((e) => e.id === index);
    return { getProjects, setProjects, delProject, getProject };
})();