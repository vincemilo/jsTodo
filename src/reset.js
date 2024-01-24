import displayProjects from "./displayProjects";
import newBtn from "./newBtn";

export default function reset(){
    const main = document.querySelector('main');
    main.innerText = '';
    displayProjects();
    newBtn();
    return main;
};