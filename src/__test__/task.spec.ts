import "jest";

import Tasks from "../modules/task";
import { tasksExamples } from "./helper/tasks-mocks";

describe("Tasks suite", () => {
  test("should be add one task, addTask method", () => {
    const tasks = new Tasks([]);
    const task = {
      id: 0,
      name: "Task 0",
      description: "Description 0",
      status: false,
    };
    tasks.addTask(task);
    expect(tasks.getTasks()).toEqual([task]);
  });
  test("should be add 5 tasks, addTask method", () => {
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
    expect(tasks.getTasks()).toEqual(tasksExamples);
  });
  test("should be delete one task, deleteTask method", () => {
    const tasks = new Tasks(tasksExamples);
    tasks.deleteTask(0);
    expect(tasks.getTasks()).toEqual(tasksExamples.slice(1));
  });
});
