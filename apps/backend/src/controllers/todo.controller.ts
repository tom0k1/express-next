import { Task } from "../../db/models/task.model";

export default class TodoController {
  async list() {
    const tasks = await Task.query();

    return tasks;
  }
}
