export default function displayTasks(tasks){
    console.log(tasks);
    const tasksDiv = document.createElement('div');
    for (let task of tasks){
        console.log(task);
        const taskDiv = document.createElement('div');
        const entries = Object.entries(task);
        for (let [key, value] of entries) {
            const keyDiv = document.createElement('div');
            const valueDiv = document.createElement('div');
            keyDiv.innerText = key;
            valueDiv.innerText = value;
            taskDiv.appendChild(keyDiv);
            taskDiv.appendChild(valueDiv);
            tasksDiv.appendChild(taskDiv);
        };
    };
    return tasksDiv;
}