import { projects } from "./projects";

export default function newTask(title = '', dueDate = '', project = '', priority = 'off', description = '') {
    const form = document.createElement('form');
    form.method = 'post';
    let taskProps = ['Title', 'Due Date', 'Add To Existing Project', 'Add To New Project', 'High Priority', 'Description'];

    for (let task in taskProps) {
        const name = taskProps[task];
        const lowercase = name.replace(/\s/g, '-').toLowerCase();
        const div = document.createElement('div');
        const label = document.createElement('label');

        div.className = lowercase;
        label.htmlFor = lowercase;
        
        if (name === 'Description'){
            let descriptionDiv = document.createElement('div');
            let textarea = document.createElement('textarea');
            textarea.name = name;
            textarea.id = lowercase;
            textarea.value = description;
            div.appendChild(label);
            descriptionDiv.appendChild(textarea);
            div.appendChild(descriptionDiv);
        } else if (name === 'Add To Existing Project'){
            if (project){
                continue;
            }
            let projectDiv = document.createElement('div');
            let select = document.createElement('select');
            select.name = 'project';
            select.id = lowercase;
            select.required = true;
            let list = projects.getProjects();
            for (let project in list){
                let option = document.createElement('option');
                option.text = list[project].name;
                option.value = list[project].name;
                select.options.add(option);
            };
            div.appendChild(label);
            projectDiv.appendChild(select);
            div.appendChild(projectDiv);
        } else if (name === 'Add To New Project'){
            if (project){
                continue;
            }
            let inputDiv = document.createElement('div');
            let input = document.createElement('input');
            input.type = 'text';
            input.name = 'project';
            input.id = lowercase;
            input.disabled = true;
            div.appendChild(label);
            inputDiv.appendChild(input);
            div.appendChild(inputDiv);
        } else if (name === 'Due Date'){
            let dateDiv = document.createElement('div');
            let input = document.createElement('input');
            input.type = 'date';
            input.name = 'date';
            input.id = lowercase;
            input.value = dueDate;
            input.required = true;
            div.appendChild(label);
            dateDiv.appendChild(input);
            div.appendChild(dateDiv);
        } else if (name === "High Priority"){
            let priorityDiv = document.createElement('div');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'priority';
            checkbox.id = lowercase;
            if (priority === 'on'){
                checkbox.checked = true;
            }
            div.appendChild(label);
            priorityDiv.appendChild(checkbox);
            div.appendChild(priorityDiv);
        } else {
            let inputDiv = document.createElement('div');
            let input = document.createElement('input');
            input.type = 'text';
            input.value = title;
            input.name = name;
            input.id = lowercase;
            input.required = true;
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
    return form;
};