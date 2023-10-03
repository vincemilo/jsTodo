import header from "./header";
import './style.css';

const content = document.getElementById('content');

content.appendChild(header());

const main = document.createElement('main');
content.appendChild(main);

const navButtons = document.querySelector('.nav-buttons');

navButtons.addEventListener('click', (e) => {
    let main = document.querySelector('main');
    let button = e.target.className;
    if (button === 'projects btn'){
        main.textContent = 'projects';
        //content.replaceChild(home(), main);
    } else if (button === 'new btn'){
        main.textContent = 'new task';
        //content.replaceChild(menu(), main);
    };
});