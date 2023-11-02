import getProjects from "./getProjects";
import setProjects from "./setProjects";

export default function newTask() {
    const main = document.createElement('main');

    //const randomTask = new Task('Lunch', '01/01/1991', 'generic project', 'blah');

    //addTaskToProject(randomTask);

    const form = document.createElement('form');
    form.method = 'post';

    
    // const title = document.createElement('div');
    // const date = document.createElement('div');
    // const project = document.createElement('div');
    // const description = document.createElement('div');

    //let task = [title, date, project, description];

    let taskProps = ['Title', 'Date', 'Project', 'Description'];

    for (let task in taskProps) {
        let name = taskProps[task];
        let div = document.createElement('div');
        let label = document.createElement('label');

        div.className = name;
        label.htmlFor = name;
        
        if (name === 'Description'){
            let descriptionDiv = document.createElement('div');
            let textarea = document.createElement('textarea');
            textarea.name = name;
            div.appendChild(label);
            descriptionDiv.appendChild(textarea);
            div.appendChild(descriptionDiv);
        } else if (name === 'Project'){
            let projectDiv = document.createElement('div');
            let select = document.createElement('select');
            select.name = name;
            setProjects('blah2');
            let projects = getProjects();
            for (let project in projects){
                let option = document.createElement('option');
                option.text = projects[project];
                select.options.add(option);
            };
            div.appendChild(label);
            projectDiv.appendChild(select);
            div.appendChild(projectDiv);
        } else if (name === 'Date'){
            let dateDiv = document.createElement('div');
            let input = document.createElement('input');
            input.type = 'date';
            input.name = name;
            div.appendChild(label);
            dateDiv.appendChild(input);
            div.appendChild(dateDiv);
        } else {
            let inputDiv = document.createElement('div');
            let input = document.createElement('input');
            input.type = 'text';
            input.name = name;
            div.appendChild(label);
            inputDiv.appendChild(input);
            div.appendChild(inputDiv);
        };
        
        label.innerText = name;
        form.appendChild(div);
        //console.log(`${taskProps[task]}`)
    };

    const button = document.createElement('div'); 
    const submit = document.createElement('button');
    const cancel = document.createElement('button');
    
    button.className = 'buttons'
    submit.type = 'submit';
    submit.id = 'submit';
    cancel.id = 'cancel';
    submit.innerText = 'Submit';
    cancel.innerText = 'Cancel';

    button.appendChild(submit);
    button.appendChild(cancel);
    form.appendChild(button);

    form.className = 'new-task';
    main.appendChild(form);
    return main;
};