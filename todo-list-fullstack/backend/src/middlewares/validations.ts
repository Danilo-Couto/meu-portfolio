import err from '../utils/err';
import { NextFunction, Request, Response } from 'express';
import { errMessages } from '../utils/errMessages';
import { createSchema, updateSchema } from '../utils/joiSchemas';

export const idValidation = (req: Request, _res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!id) {
    throw err('unauthorized', errMessages.idRequired);
  }
  return next();
};

export const createValidation = (req: Request, _res: Response, next: NextFunction) => {
  const { body } = req;
  const { error } = createSchema.validate(body);
  if (error) {
    return next({
      code: 'badRequest', message: error.details[0].message,
    });
  }
  return next();
};

export const updateValidation = (req: Request, _res: Response, next: NextFunction) => {
  const { body } = req;
  const { error } = updateSchema.validate(body);
  if (error) {
    return next({
      code: 'badRequest', message: error.details[0].message,
    });
  }
  return next();
};