import express from 'express';
import usersControllers from '../controllers/usersControllers.js';
const router =express.Router();

router.post('/register', usersControllers.registerUser);
router.post('/login',usersControllers.getLoginUser);
router.get('/users',usersControllers.getAllUsers);
router.get('/users/:id',usersControllers.getUsersById);
router.put('/users/:id',usersControllers.updateUsers);

export default router;