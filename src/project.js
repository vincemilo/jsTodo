let i = 0;

export default class Project {
    constructor(name, tasks = [], id = i) {
        this.name = name;
        this.tasks = tasks;
        this.id = id;
        i++;
    };

    get info() {
        return this.tasks;
    };

    assignTask(task) {
        this.tasks.push(task);
    };
};