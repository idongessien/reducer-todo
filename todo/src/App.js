import React, { useReducer } from 'react';
import { todoReducer, initialState } from './reducers/index.js';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const completed = (id) => { 
    dispatch({ type: 'MARK_COMPLETE', payload: id })
  }

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED ', payload: '' })
  }

  return (
      <div className="App">
        <h2>Tasks</h2>
        <TodoList state={ state } />
        <TodoForm dispatch={ dispatch}  />
      </div> 
  );
}

export default App;