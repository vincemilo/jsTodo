import Project from './project';
let project = new Project('New Project')

export const projects = (function () {
    const list = [project];
    const getProjects = () => list;
    const setProjects = (params) => list.push(params);
    return { getProjects, setProjects };
})();