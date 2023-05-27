"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = __importDefault(require("./modules/task"));
const tasks = new task_1.default([]);
const createTasks = [0, 1, 2, 3, 4, 5];
createTasks.forEach((task) => tasks.addTask({
    id: task,
    name: `Task ${task}`,
    description: `Description ${task}`,
    status: false,
}));
console.log(tasks.getTasks());
//# sourceMappingURL=index.js.map