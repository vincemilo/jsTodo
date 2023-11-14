export default class Project {
    constructor(name, tasks = []) {
        this.name = name;
        this.tasks = tasks;
    };

    get info() {
        return this.tasks;
    };

    assignTask(task) {
        this.tasks.push(task);
    };
};