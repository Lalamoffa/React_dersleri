import React, { useState } from 'react'
import '../App.css';


export default function TodoCreate({ onCreateTodo }) {

  const [newTodo, setnewTodo] = useState('');
  const clearInput = () => {
    setnewTodo('');
  }

  const createTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 99999999999),
      content: newTodo
    }
    onCreateTodo(request);
    clearInput();
  }
  return (
    
    <div className='todo-create'>
      <h1>Todo List</h1>
      <input
        value={newTodo}
        onChange={(e) => setnewTodo(e.target.value)}
        className='todo-input' type="text" placeholder='Todo daxil et' />

      <button onClick={createTodo} className='todo-button'>Todo Yarat</button>
    </div>
  )
}
