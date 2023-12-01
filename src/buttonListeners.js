import Task from "./task";
import addTaskToProject from "./addTaskToProject";

export default function buttonListeners(){
    const buttons = document.querySelector('.buttons');
    buttons.addEventListener('click', (e) => {
    const taskForm = document.querySelector('.new-task');
    //console.log(taskForm);
    //let currentMain = document.querySelector('main');
    //let blankMain = () => document.createElement('main');
    if (e.target.id === 'submit'){
        if (taskForm.checkValidity() === false) {
            taskForm.reportValidity();
            return;
        };
        const data = new FormData(taskForm);
        const task = new Task;
        //console.log(data);
        for (const entry of data) {
            task[entry[0].replace(/\s/g, '-').toLowerCase()] = entry[1];
        };
        //console.log(task.Project);
        addTaskToProject(task.project, task);
    } else if (e.target.id === 'cancel'){
        //console.log('test');
        //console.log(taskForm);
        taskForm.remove();
    };
        e.preventDefault();
    });
    
    const project = document.querySelector('.add-to-existing-project');

    project.addEventListener('change', (e) => {
        const input = document.getElementById('add-to-new-project');
        //console.log(e.target.value);
        if (e.target.value === "Add To New Project"){
            input.disabled = false;
            input.required = true;
            //console.log(input);
        } else {
            input.innerText = '';
            input.disabled = true;
        };
    });
};