const list = {
	"create a new practice task": "In Progress",
	"make a bed": "Done",
	"write a post": "To Do",
}
function changeStatus(task, status) {
    if (task in list) {
        list[task] = status
    } else console.log("Can not change status")
}
function addTask(task) {
    list[task] = "To Do";
}
function deleteTask(task) {
    if (task in list) {
        delete list[task]
    } else console.log("This is not on the list")
}
function showList(list) {
    let InProgress = "";
    let Done = "";
    let ToDo = "";
    for(let task in list) {
        if(list[task] ==="To Do") {
            ToDo += `"${task}"`;
        } else if (list[task] === "Done") {
            Done += `"${task}"`;
        } else if (list[task] === "In Progress") {
            InProgress += `"${task}"`;
        }
    }
    console.log(`To Do:\ ${ToDo || `-`}\n In Progress:\n ${InProgress || `-`}\n Done: \n ${Done || `-`}`);
}

addTask("create apple")
addTask("eat food");
deleteTask("make a bed");
changeStatus("write a post", "In Progress");
showList();