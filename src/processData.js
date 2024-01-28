export const processData = (function () {
    const setData = (project) => {
        localStorage.setItem(project.id, JSON.stringify(project));
    };

    const delData = (project) => {
        localStorage.removeItem(project.id)
    }

    return { setData, delData };
})();