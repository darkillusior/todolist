const initialState = {
    todos: []
  };
  
  const todosReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload]
        };
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter((_, index) => index !== action.payload)
        };
      case 'UPDATE_TODO':
        const updatedTodos = state.todos.map((todo, index) => 
          index === action.payload.index ? action.payload.newTask : todo
        );
        return {
          ...state,
          todos: updatedTodos
        };
      default:
        return state;
    }
  };
  
  export default todosReducer;
  