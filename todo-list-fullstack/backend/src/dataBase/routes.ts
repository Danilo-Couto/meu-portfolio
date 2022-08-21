import { Router } from 'express';
import TaskController from '../controllers/task';
import { createValidation, idValidation, updateValidation } from '../middlewares/validations';
// import TaskUserController from '../controllers/taskUser';
// import UserController from '../controllers/user';

const router = Router();

const task = new TaskController(); // passar prismaClient por arg
// const user = new UserController();
// const taskUser = new TaskUserController();

router.get('/task', task.findAll);
router.get('/task/:id', idValidation, task.findOne);
router.delete('/task/', task.deleteAll);
router.delete('/task/:id', idValidation, task.deleteOne);
router.put('/task/:id', idValidation, updateValidation, task.updateOne);
router.post('/task', createValidation, task.create);

// router.post('/user', user.create);
// router.get('/user', user.findAll);
// router.get('/user/:id', user.findById);

// router.post('/taskuser', taskUser.create);
// router.get('/taskuser', taskUser.findAll);

// router.get(handleErrors);

export default router;
