# jsTodo
To Do App using Webpack

- Dynamically create todo task objects and assign to different projects

- View list of projects 

- Click a project to view all todos

- Click a single todo to see/edit its details

- Delete a todo

- Logic separated by module

- Using localStorage to save data

## Process

- I first created the new task form element and worked on sending data to a new task object. This task object then needed to be assigned to a project object so the display could be populated by the objects themselves. 

- Ran into difficulty with finding the correct object ID in the case of duplicate tasks so created a UID system by just adding an increment counter to the objects. Not sure if this is best practices but did the job.

- Felt clunky on two separate columns so condensed UI into a single column.

- Was getting a bug where localStorage wasn't allowing use of a Project method until I realized I was just populating the project list with the hash values rather than an actual Project object so updated projects.setProjects() accordingly

### To Do

- Better UI/more mobile friendly
