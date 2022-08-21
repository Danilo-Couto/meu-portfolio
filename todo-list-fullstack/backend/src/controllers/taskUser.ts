import { Request, Response } from 'express';
import prismaClient from '../dataBase/prismaClient';

export default class TaskUserController {
  // async create(req: Request, res: Response) {
  //   const { id_task, id_user } = req.body;

  //   const taskUser = await prismaClient.taskUser.create({
  //     data: { id_task, id_user },
  //   });

  //   return res.json(taskUser);
  // }

  // async findAll(req: Request, res: Response) {
  //   const users = await prismaClient.taskUser.findMany();
  //   return res.json(users);
  // }
}
