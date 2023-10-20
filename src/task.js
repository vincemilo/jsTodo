export default class Task {
    constructor(title, date, project, description) {
        this.title = title;
        this.date = date;
        this.project = project;
        this.description = description;
    };

    get info() {
        return `${this.title} on ${this.date} in ${this.project}: ${this.description}`;  
    };
};