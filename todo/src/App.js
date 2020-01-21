import React, { useReducer } from 'react';
import './App.css';
import Title from './components/Title';
import Todos from './components/Todos';
import {initialState , reducer} from './reducers/reducer'




function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: Math.random()
    }
    dispatch({type: "ADD_TODO", payload: newTodo})
  }

  const handleComplete = (id) => {
    dispatch({type:"COMPLETED_TODO", payload: id})
  }

  const clearCompleted = () => {
    dispatch({type: "CLEAR_COMPLETED_TODO"})
  }
  return (
    <div>
      <Title />
      <Todos />
      <button onClick={(e) => {
        e.preventDefault()
        clearCompleted()
      }}>Clear Task</button>
    </div>
  );
}

export default App;
