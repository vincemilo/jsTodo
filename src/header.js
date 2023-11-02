export default function header() {
    const headerDiv = document.createElement('header');
    const logo = document.createElement('div');
    const navButtons = document.createElement('div');
    const projectsDiv = document.createElement('div');
    const newDiv = document.createElement('div');

    headerDiv.appendChild(logo);

    const elements = [projectsDiv, newDiv];
    let elementName = ['projects', 'new'];
    let i = 0;
    
    elements.forEach((element) => {
        element.className = `${elementName[i]} btn`;
        navButtons.appendChild(element);
        i++
    });

    logo.className = 'logo';
    navButtons.className = 'nav-buttons';

    headerDiv.appendChild(navButtons);

    logo.innerText = 'To Do App';
    projectsDiv.innerText = 'Projects';
    newDiv.innerText = 'New Task';
  
    return headerDiv;
};