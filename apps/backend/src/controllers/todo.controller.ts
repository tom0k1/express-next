import { Task } from "../../db/models/task.model";
import { Response, Request } from "express";

export default class TodoController {
  async list(req: Request, res: Response) {
    const tasks = await Task.query();

    res.json(tasks);
  }
}
