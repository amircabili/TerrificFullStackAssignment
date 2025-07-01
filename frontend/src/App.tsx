import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error loading todos:', error);
    }
  };

  const addTodo = async () => {
    if (!text.trim()) return;
    const response = await axios.post('/todos', { text });
    setTodos([...todos, response.data]);
    setText('');
  };

  const markDone = async (id: number) => {
    await axios.patch(`/todos/${id}/done`);
    fetchTodos();
  };

  const deleteTodo = async (id: number) => {
    await axios.delete(`/todos/${id}`);
    fetchTodos();
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Terrific Todo App</h2>
      <div className="mb-3">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control"
          placeholder="Add new task"
        />
        <button onClick={addTodo} className="btn btn-primary mt-2">
          Add
        </button>
      </div>
      <ul className="list-group">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <div>
              {!todo.done && (
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => markDone(todo.id)}
                >
                  Done
                </button>
              )}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
