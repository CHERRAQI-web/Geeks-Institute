import express from 'express';
import taskController from '../controllers/tasksController.js';
const router = express.Router();

router.get('/', taskController.getAlltasks);
router.get('/:id',taskController.getTaskById);
router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

export default router;
