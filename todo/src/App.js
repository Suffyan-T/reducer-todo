import React, { useReducer } from 'react';
import './App.css';
import Title from './components/Title';
import Todos from './components/Todos';

function App() {

  return (
    <div>
      <Title />
      <Todos />
    </div>
  );
}

export default App;
