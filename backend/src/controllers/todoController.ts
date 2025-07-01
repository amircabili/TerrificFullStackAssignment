// backend/controllers/todoController.ts
import { Request, Response } from 'express';

let todos = [
  { id: 1, text: 'Buy groceries', done: false },
  { id: 2, text: 'Walk the dog', done: true }
];

// Get all todos
export const getTodos = (req: Request, res: Response) => {
  res.json(todos);
};

// Add new todo
export const addTodo = (req: Request, res: Response) => {
  const newTodo = { id: Date.now(), text: req.body.text, done: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

// Update text of a todo (optional)
export const updateTodo = (req: Request, res: Response) => {
  const { id } = req.params;
  const { text } = req.body;
  const todo = todos.find(t => t.id === parseInt(id));
  if (todo) {
    todo.text = text;
    res.json(todo);
  } else {
    res.status(404).send('Not found');
  }
};

// Mark todo as done
export const markDone = (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = todos.find(t => t.id === parseInt(id));
  if (todo) {
    todo.done = true;
    res.json(todo);
  } else {
    res.status(404).send('Not found');
  }
};

// Delete a todo
export const deleteTodo = (req: Request, res: Response) => {
  const { id } = req.params;
  todos = todos.filter(t => t.id !== parseInt(id));
  res.status(204).send();
};
