import express from 'express';
import {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  markDone
} from '../controllers/todoController';

const todoRoutes = express.Router();

todoRoutes.get('/', getTodos);
todoRoutes.post('/', addTodo);
todoRoutes.patch('/:id', updateTodo);
todoRoutes.patch('/:id/done', markDone);
todoRoutes.delete('/:id', deleteTodo);

export default todoRoutes;
