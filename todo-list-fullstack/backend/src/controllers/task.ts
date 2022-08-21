import { Request, Response } from 'express';
import TaskModel from '../models/task';

export default class TaskController {
  constructor(private taskModel= new TaskModel()){
  }

  findAll = async(_req: Request, res: Response) => {
    const tasks = await this.taskModel.findAll();
    return res.json({ 'tasks': tasks || []});
  }

  findOne = async(req: Request, res: Response) => {
    const { id } = req.params;
    const task = await this.taskModel.findOne(+id);
    return res.json({ 'task': task });
  }

  create = async(req: Request, res: Response) => {
    const { name, content, status, userId } = req.body;
    const task = await this.taskModel.create(name, content, status, userId);
    return res.json({ 'task created': task });
  }

  updateOne = async(req: Request, res: Response) => {
    const { id } = req.params;
    const { name, editedContent, status, owner } = req.body;

    const task = await this.taskModel.updateOne(+id, name, editedContent, status, owner);
    return res.json({ 'task updated': task });
  }

  deleteOne = async (req: Request, res: Response) => {
    const { id } = req.params;
    const task = await this.taskModel.deleteOne(+id);
    return res.json({ 'deleted task': task });
  }

  deleteAll = async(_req: Request, res: Response) => {
    await this.taskModel.deleteAll();
    return res.json('all tasks deleted');
  }
}
