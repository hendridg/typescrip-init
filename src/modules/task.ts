interface Task {
  id: number;
  name: string;
  description: string;
  status: boolean;
}
class Tasks {
  tasks: Task[];
  constructor(tasks: Task[]) {
    this.tasks = [...tasks];
  }
  addTask(task: Task) {
    this.tasks.push(task);
  }
  getTasks() {
    return this.tasks;
  }
  deleteTask(id: number) {
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks.splice(index, 1);
  }
}

export default Tasks;
