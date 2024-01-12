import newTask from "./newTask";
import buttonListeners from "./buttonListeners";

export default function newBtn(){
    const newBtn = document.createElement('button');
    newBtn.innerText = "New Task";
    const main = document.querySelector('main');
    main.appendChild(newBtn);
    
    newBtn.addEventListener('click', () => {
        main.appendChild(newTask());
        buttonListeners();
        newBtn.remove();
    });
    return newBtn;    
}