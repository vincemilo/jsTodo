export default function taskDetails(task, taskDiv){
    console.log(task);
    //console.log(taskDiv.className);
    const descriptionDiv = document.createElement('div');
    descriptionDiv.innerText = task['description'];
    if (taskDiv.className === 'task'){
        taskDiv.classList.toggle('toggle');
        taskDiv.appendChild(descriptionDiv);
    } else if (taskDiv.className === 'task toggle'){
        taskDiv.lastChild.remove();
        taskDiv.classList.toggle('toggle');
    };
    
    
};