import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../store/todosSlice';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState('');

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      dispatch(addTodo(task));
      setTask('');
    }
  };

  const handleUpdateTodo = () => {
    if (editTask.trim() !== '') {
      dispatch(updateTodo({ index: editIndex, newTask: editTask }));
      setEditIndex(null);
      setEditTask('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">TODO App</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 p-2 border dark:text-black  rounded-l focus:outline-none"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul className="list-disc pl-5">
        {todos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            {editIndex === index ? (
              <input
                type="text"
                value={editTask}
                onChange={(e) => setEditTask(e.target.value)}
                className="flex-1 p-2 dark:text-black border rounded"
              />
            ) : (
              <span>{todo}</span>
            )}
            <div>
              {editIndex === index ? (
                <button
                  onClick={handleUpdateTodo}
                  className="bg-green-500 text-white p-1 rounded ml-2"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setEditIndex(index);
                    setEditTask(todo);
                  }}
                  className="bg-yellow-500 text-white p-1 rounded ml-2"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => dispatch(deleteTodo(index))}
                className="bg-red-500 text-white p-1 rounded ml-2"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
