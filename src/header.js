export default function header() {
    const headerDiv = document.createElement('header');
    const logo = document.createElement('div');
    logo.className = 'logo';
    logo.innerText = 'To Do App';
    headerDiv.appendChild(logo);
    return headerDiv;
};