export default function populateProj(project){
    const proj = document.createElement('div');
    proj.className = 'project';
    proj.innerText = project.name;
    const editBtn = document.createElement('button');
    const delBtn = document.createElement('button');
    editBtn.innerText = 'Edit';
    delBtn.innerText = 'Delete';
    const btns = document.createElement('div');
    btns.addEventListener('click', (e)=> {
        //console.log(e.target.innerText)
        if (e.target.innerText === 'Edit'){
            proj.innerText = '';
            const form = document.createElement('form');
            form.method = 'post';
            const input = document.createElement('input');
            input.type = 'text'
            input.required = true;
            input.value = project.name;
            const btns = document.createElement('div');
            const submit = document.createElement('button');
            const cancel = document.createElement('button');
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
                        proj.replaceWith(populateProj(project));
                    };
                } else {
                    proj.replaceWith(populateProj(project));
                };
            })
        } else if (e.target.innerText === 'Delete'){
            alert('Are you sure you want to delete this project?')
        };
    });
    btns.appendChild(editBtn);
    btns.appendChild(delBtn);
    proj.appendChild(btns);
    return proj;    
};