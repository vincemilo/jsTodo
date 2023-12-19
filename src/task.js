export default class Task {
    constructor(title, date, project, description) {
        this.title = title;
        this.date = date;
        this.project = project;
        this.description = description;
    };

    get info() {
        return [this.title, this.date, this.project, this.description];  
    };
};