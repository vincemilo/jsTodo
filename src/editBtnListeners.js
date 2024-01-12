import populateTask from "./populateTask";

export default function editBtnListeners(form, task){
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
            form.replaceWith(populateTask(task, form.parentElement));
            //console.log('submit');
        } else {
            form.replaceWith(populateTask(task, form.parentElement));
            //console.log('cancel');
        }
        //console.log(e.submitter.id);
    });
};