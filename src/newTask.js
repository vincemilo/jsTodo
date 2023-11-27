import { projects } from "./projects";

export default function newTask() {
    const main = document.createElement('main');
    const form = document.createElement('form');
    form.method = 'post';
    let taskProps = ['Title', 'Date', 'Project', 'Add To New Project', 'Description'];

    for (let task in taskProps) {
        let name = taskProps[task];
        let div = document.createElement('div');
        let label = document.createElement('label');

        div.className = name.replace(/\s/g, '-').toLowerCase();
        label.htmlFor = name;
        
        if (name === 'Description'){
            let descriptionDiv = document.createElement('div');
            let textarea = document.createElement('textarea');
            textarea.name = name;
            textarea.id = name;
            div.appendChild(label);
            descriptionDiv.appendChild(textarea);
            div.appendChild(descriptionDiv);
        } else if (name === 'Project'){
            let projectDiv = document.createElement('div');
            let select = document.createElement('select');
            select.name = name;
            select.id = name;
            let list = projects.getProjects();
            for (let project in list){
                let option = document.createElement('option');
                option.text = list[project].name;
                select.options.add(option);
            };
            div.appendChild(label);
            projectDiv.appendChild(select);
            div.appendChild(projectDiv);
        } else if (name === 'Add To New Project'){
            let inputDiv = document.createElement('div');
            let input = document.createElement('input');
            input.type = 'text';
            input.name = name;
            input.id = name;
            input.disabled = true;
            div.appendChild(label);
            inputDiv.appendChild(input);
            div.appendChild(inputDiv);
        } else if (name === 'Date'){
            let dateDiv = document.createElement('div');
            let input = document.createElement('input');
            input.type = 'date';
            input.name = name;
            input.id = name;
            div.appendChild(label);
            dateDiv.appendChild(input);
            div.appendChild(dateDiv);
        } else {
            let inputDiv = document.createElement('div');
            let input = document.createElement('input');
            input.type = 'text';
            input.name = name;
            input.id = name;
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