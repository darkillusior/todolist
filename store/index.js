import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';
import employeesReducer from './employeesSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    employees: employeesReducer,
  },
});

export default store;
