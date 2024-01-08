// import Task from "./task";
// import addTaskToProject from "./addTaskToProject";
import taskDetails from "./taskDetails";
import populateTask from "./populateTask";

export default function editBtnListeners(form, task){
    //console.log(form);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.submitter.id === 'submit'){
            if (form.checkValidity() === false) {
                form.reportValidity();
                return;
            } else {
                const data = new FormData(form);
                console.log(task);
                task.priority = 'off';
                for (const entry of data) {
                    task[entry[0].replace(/\s/g, '-').toLowerCase()] = entry[1];
                };
                console.log(task);
            };
            //console.log(task.priority);
            populateTask(form, task);
            //console.log('submit');
        } else {
            populateTask(form, task);
            //console.log('cancel');
        }
        //console.log(e.submitter.id);
    });
};