export const projects = (function () {
    const list = ['blah'];
    const getProjects = () => list;
    const setProjects = (params) => list.push(params);
    return { getProjects, setProjects };
})();