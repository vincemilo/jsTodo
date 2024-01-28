import { projects } from './projects';
import Edit from './img/edit.png';
import Delete from './img/delete.png';
import reset from './reset';
import { processData } from './processData';

export default function populateProj(project){
    const proj = document.createElement('div');
    proj.className = 'project';
    proj.innerText = project.name;
    const editIcon = new Image();
    editIcon.src = Edit;
    editIcon.className = 'edit-btn';
    const delIcon = new Image();
    delIcon.className = 'del-btn';
    delIcon.src = Delete;
    const btns = document.createElement('div');
    btns.className = 'icon-btns';
    btns.addEventListener('click', (e)=> {
        //console.log(e.target.className)
        if (e.target.className === 'edit-btn'){
            proj.innerText = '';
            const form = document.createElement('form');
            form.id = 'title';
            form.method = 'post';
            const input = document.createElement('input');
            input.type = 'text'
            input.required = true;
            input.value = project.name;
            const btns = document.createElement('div');
            const submit = document.createElement('button');
            const cancel = document.createElement('button');
            btns.className = 'buttons';
            submit.innerText = 'Submit';
            cancel.innerText = 'Cancel';
            btns.appendChild(submit);
            btns.appendChild(cancel);
            form.appendChild(input);
            form.appendChild(btns);
            proj.appendChild(form);
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                if (e.submitter.innerText === 'Submit'){
                    if (form.checkValidity() === false) {
                        form.reportValidity();
                        return;
                    } else {
                        project.name = input.value;
                        processData.setData(project);
                        reset();
                    };
                } else {
                    reset();
                };
            })
        } else if (e.target.className === 'del-btn'){
            if (confirm('Are you sure you want to delete this project and all associated tasks?')){
                projects.delProject(project.id);
                proj.parentElement.remove();
                processData.delData(project);
            } else {
                console.log('cancel');
            };
        };
    });
    btns.appendChild(editIcon);
    btns.appendChild(delIcon);
    proj.appendChild(btns);
    return proj;    
};