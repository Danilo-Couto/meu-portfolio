import prismaClient from '../dataBase/prismaClient';

const select = {
  id: true, name: true, content: true, created_at: true, status: true,
  User: {
    select: {
      name: true,
    },
  },
}
export default class TaskModel {  
  async findAll() {
    const tasks = await prismaClient.task.findMany({select})
    return tasks;
  }

  async findOne(id: number) {
    const task = await prismaClient.task.findUnique({
      where: { id: +id },
      select
    });
    return task;
  }
  
  async create(name: string, content: string, status: string, userId: number) {
    const task = await prismaClient.task.create({
      data: { name, content, status, userId } ,
    });
    return task;
  }

  async updateOne(id: number, name: string, editedContent: string, status: string, owner: number) {
    const task = await prismaClient.task.update({
      where: { id },
      data: { name, content: editedContent, status, userId: owner }})
    return task;
  }


  async deleteOne(id: number) {
    const task = await prismaClient.task.delete({
      where: { id: +id },
    });
    return task;
  }

  async deleteAll() {
    const task = await prismaClient.task.deleteMany();
    return task;
  }
}
