let i = 0;

export default class Task {
    constructor(title, date, project, description, priority = 'off', id = i) {
        this.title = title;
        this.date = date;
        this.project = project;
        this.description = description;
        this.priority = priority;
        this.id = id;
        i++;
    };

    get info() {
        return [this.title, this.date, this.project, this.description, this.priority];  
    };
};