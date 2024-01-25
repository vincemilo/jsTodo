import header from "./header";
import displayProjects from "./displayProjects";
import addTaskToProject from "./addTaskToProject";
import Task from "./task";
import './style.css';
import newBtn from "./newBtn";
import footer from "./footer";

const content = document.getElementById('content');
const main = document.createElement('main');
const wrapper = document.createElement('div');
wrapper.id = 'wrapper';

wrapper.appendChild(header());
wrapper.appendChild(main);
content.appendChild(wrapper);
content.appendChild(footer());

const task = new Task('Lorem ipsum', '2020-10-10', 'Uncategorized', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
const task2 = new Task('blahdsf', '2020-10-13', 'New Project', 'descrup2', 'on');
const task3 = new Task('blahdsf', '2020-10-14', 'Uncategorized', 'descrup3');
const task4 = new Task('blah', '2020-10-10', 'Uncategorized', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

addTaskToProject('Uncategorized', task);
addTaskToProject('New Project', task2);
addTaskToProject('Uncategorized', task3);
addTaskToProject('Uncategorized', task4);

displayProjects();
newBtn();