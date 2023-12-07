export default class Task {
    constructor(title, date, project, priority, description) {
        this.title = title;
        this.date = date;
        this.project = project;
        this.priority = priority;
        this.description = description;
    };

    get info() {
        return [this.title, this.date, this.project, this.priority, this.description];  
    };
};