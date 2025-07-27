import express from 'express';
import bookController from '../controllers/bookController.js';
const router = express.Router();

router.get('/', bookController.getAllBooks);
router.get('/:id',bookController.getBooksById);
router.post('/', bookController.createBooks);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

export default router;
