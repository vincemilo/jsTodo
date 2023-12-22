export default class Task {
    constructor(title, date, project, description, priority = 'off') {
        this.title = title;
        this.date = date;
        this.project = project;
        this.description = description;
        this.priority = priority;
    };

    get info() {
        return [this.title, this.date, this.project, this.description, this.priority];  
    };
};