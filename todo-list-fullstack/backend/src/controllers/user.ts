import { Request, Response } from 'express';
import prismaClient from '../dataBase/prismaClient';

export default class UserController {
  // async create(req: Request, res: Response) {
  //   const {
  //     name, email, password, role,
  //   } = req.body;

  //   const user = await prismaClient.user.create({
  //     data: {
  //       name, email, password, role,
  //     },
  //   });

  //   return res.json(user);
  // }

  // async findAll(req: Request, res: Response) {
  //   const users = await prismaClient.user.findMany();
  //   return res.json(users);
  // }

  // async findById(req: Request, res: Response) {
  //   const { id } = req.params;

  //   const user = await prismaClient.user.findUnique({
  //     where: { id: +id },
  //     include: { TaskUser: true },
  //   });
  //   return res.json(user);
  // }
}
