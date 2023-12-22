export default function taskDetails(task, taskDiv){
    console.log(task);
    //console.log(taskDiv.className);
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('task-descrip');
    descriptionDiv.innerText = task['description'];
    const taskContainer = document.getElementById(`${task['project']}-${task['title']}`);
    if (taskDiv.className === 'task'){
        console.log(taskContainer);
        const btns = document.createElement('div');
        const editBtn = document.createElement('button');
        const delBtn = document.createElement('button');
        editBtn.innerText = 'Edit';
        delBtn.innerText = 'Delete';
        btns.classList.add('buttons');
        btns.addEventListener('click', (e)=> {
            if (e.target.innerText === 'Edit'){
                
                console.log('Edit');
            } else if ((e.target.innerText === 'Delete')){
                console.log('Delete');
            };
        });
        btns.appendChild(editBtn);
        btns.appendChild(delBtn);
        descriptionDiv.appendChild(btns);
        taskContainer.appendChild(descriptionDiv);
        taskDiv.classList.toggle('toggle');

    } else if (taskDiv.className === 'task toggle'){
        taskDiv.nextSibling.remove();
        taskDiv.classList.toggle('toggle');
    };
    
    
};