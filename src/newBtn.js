import newTask from "./newTask";
import buttonListeners from "./buttonListeners";
import Add from "./img/add.png"

export default function newBtn(){
    const newIcon = new Image();
    newIcon.src = Add;
    newIcon.className = 'new-btn';
    const main = document.querySelector('.projects');
    main.appendChild(newIcon);
    
    newIcon.addEventListener('click', () => {
        main.appendChild(newTask());
        buttonListeners();
        newIcon.remove();
    });
    return newIcon;    
}