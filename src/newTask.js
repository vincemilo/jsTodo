export default function newTask() {
    let tasks = [];

    class Task {
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

    function addTaskToProject(task){
        tasks.push(task);
    };

    const randomTask = new Task('Lunch', '01/01/1991', 'generic project', 'blah');

    addTaskToProject(randomTask);

    const form = document.createElement('form');
    form.method = 'post';

    
    const title = document.createElement('div');
    const date = document.createElement('div');
    const project = document.createElement('div');
    const description = document.createElement('div');

    //let task = [title, date, project, description];

    let taskProps = ['title', 'date', 'projects', 'description'];

    for (let task in taskProps) {
        console.log(`${taskProps[task]}`)
    };


    console.log(tasks[0].info);

    return form;
}