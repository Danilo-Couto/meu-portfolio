import TaskModel from '../models/task';
import err from '../utils/err';
import { errMessages } from '../utils/errMessages';

export default class TaskService {
  constructor(private taskModel= new TaskModel()){
  }

  findAll = async() => {
    const tasks = await this.taskModel.findAll();
    return tasks;
  }

  findOne = async(id: number) => {
    const task = await this.taskModel.findOne(id);
    if (!task) throw err('notFound', errMessages.notFound);

    return task;
  }

  create = async(name: string, content: string, status: string, userId: number) => {
    const task = await this.taskModel.create(name, content, status, userId);
    return task;
  }

  updateOne = async(id: string | number, name: string, editedContent: string, status: string, owner: number) => {
    const exists = await this.findOne(+id);
    if (exists) throw err('notFound', errMessages.notFound);
    
    const task = await this.taskModel.updateOne(+id, name, editedContent, status, owner);
    return  task;
  }

  deleteOne = async (id: string | number) => {
    const exists = await this.findOne(+id);
    if (exists) throw err('notFound', errMessages.notFound);

    const task = await this.taskModel.deleteOne(+id);
    return task;
  }

  deleteAll = async() => {
    await this.taskModel.deleteAll();
    return 
  }
}
