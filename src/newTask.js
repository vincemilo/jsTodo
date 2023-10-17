export default function newTask() {
    const main = document.createElement('main');
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

    
    // const title = document.createElement('div');
    // const date = document.createElement('div');
    // const project = document.createElement('div');
    // const description = document.createElement('div');

    //let task = [title, date, project, description];

    let taskProps = ['Title', 'Date', 'Projects', 'Description'];

    for (let task in taskProps) {
        let name = taskProps[task];
        let div = document.createElement('div');
        let label = document.createElement('label');
        let input = document.createElement('input');

        div.className = name;
        label.htmlFor = name;
        
        if (name === 'Description'){
            let descriptionDiv = document.createElement('div');
            let textarea = document.createElement('textarea');
            div.appendChild(label);
            descriptionDiv.appendChild(textarea);
            div.appendChild(descriptionDiv);

        } else {
            input.type = 'text';
            div.appendChild(label);
            div.appendChild(input);
        };
        
        label.innerText = name;

        form.appendChild(div);
        //console.log(`${taskProps[task]}`)
    };


    const button = document.createElement('div'); 
    const submit = document.createElement('button');
    const cancel = document.createElement('button');
    
    button.className = 'button'
    submit.type = 'button';
    cancel.type = 'button';
    submit.innerText = 'Submit';
    cancel.innerText = 'Cancel';

    button.appendChild(submit);
    button.appendChild(cancel);
    form.appendChild(button);

    form.className = 'new-task';
    main.appendChild(form);
    return main;
}