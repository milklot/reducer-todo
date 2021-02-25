import './App.css';
import React, { useReducer } from 'react';
import { initialState, reducer } from './reducers/reducer';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

function App() {

  const [state, dispatch] = useReducer (reducer, initialState);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <NewTodoForm dispatch={dispatch}/>
      <TodoList state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;