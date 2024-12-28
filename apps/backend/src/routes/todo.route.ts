import express from "express";
import TodoController from "../controllers/todo.controller";

const router = express.Router();
const controller = new TodoController();

router.get("/list", controller.list);

export default router;
