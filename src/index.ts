import Tasks from "./modules/task";

const tasks = new Tasks([]);

const createTasks = [0, 1, 2, 3, 4, 5];

createTasks.forEach((task) =>
  tasks.addTask({
    id: task,
    name: `Task ${task}`,
    description: `Description ${task}`,
    status: false,
  })
);
console.log(tasks.getTasks());
