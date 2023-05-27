import "jest";

import Tasks from "../modules/task";

describe("Tasks suite", () => {
  test("addTask", () => {
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
});
