export default function taskDetails(task, taskDiv){
    console.log(task);
    //console.log(taskDiv.className);
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('task-descrip');
    descriptionDiv.innerText = task['description'];
    if (taskDiv.className === 'task'){
        const projDiv = document.getElementById(task['project']);
        console.log(projDiv);
        const btns = document.createElement('div');
        const editBtn = document.createElement('button');
        const delBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        delBtn.innerText = 'Delete';
        btns.classList.add('buttons');
        btns.addEventListener('click', (e)=> {
            //e.stopPropagation();
            console.log('click')
        });
        btns.appendChild(editBtn);
        btns.appendChild(delBtn);
        descriptionDiv.appendChild(btns);
        projDiv.appendChild(descriptionDiv);
        taskDiv.classList.toggle('toggle');

    } else if (taskDiv.className === 'task toggle'){
        taskDiv.nextSibling.remove();
        taskDiv.classList.toggle('toggle');
    };
    
    
};