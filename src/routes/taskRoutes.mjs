import express from 'express';

const router = express.Router();

import TaskController from '../controllers/TaskController.mjs';

router.get('/add', TaskController.createTask);
router.post('/add', TaskController.createTaskSave);
router.post('/remove', TaskController.removeTask);
router.get('/edit/:id', TaskController.updateTask);
router.post('/edit/:id', TaskController.updateTaskSave);
router.post('/updatestatus', TaskController.toggleTaskStatus);
router.get('/', TaskController.showTasks);

export default router;
