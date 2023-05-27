"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tasks {
    constructor(tasks) {
        this.tasks = tasks;
    }
    addTask(task) {
        this.tasks.push(task);
    }
    getTasks() {
        return this.tasks;
    }
    deleteTask(id) {
        const index = this.tasks.findIndex((task) => task.id === id);
        this.tasks.splice(index, 1);
    }
}
exports.default = Tasks;
//# sourceMappingURL=task.js.map