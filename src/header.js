export default function header() {
    const headerDiv = document.createElement('header');
    const logo = document.createElement('div');
    const navButtons = document.createElement('div');
    const homeDiv = document.createElement('div'); 
    const projectsDiv = document.createElement('div');
    const newDiv = document.createElement('div');

    headerDiv.appendChild(logo);

    const elements = [homeDiv, projectsDiv, newDiv];
    let elementName = ['home', 'projects', 'new'];
    let i = 0;
    
    elements.forEach((element) => {
        element.className = `${elementName[i]} btn`;
        navButtons.appendChild(element);
        i++
    });

    navButtons.className = 'nav-buttons';

    headerDiv.appendChild(navButtons);

    logo.innerHTML = 'To Do App';
    homeDiv.innerText = 'Home';
    projectsDiv.innerText = 'Projects';
    newDiv.innerText = 'New Task';
  
    return headerDiv;
};