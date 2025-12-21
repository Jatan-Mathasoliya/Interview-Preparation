import React, { useState } from 'react'

function Todo() {
    const [todo, setTodo] = useState([])
    const [input, setInput] = useState('');

    function handleAddTodo() {
        const newTodo = {
            id: Date.now(),
            text: input
        };
        setTodo([...todo, newTodo]);
        setInput('');
    }

    function removeTodo(id) {
        const updatedTodo = todo.filter(item => item.id !== id);
        setTodo(updatedTodo);
    }

  return (
    <div>
        <h1>Todo List</h1>

        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleAddTodo}>Add Todo</button>

        {
            todo.map((item) => (
                <div key={item.id}>
                    <span>{item.text}</span>
                    <button onClick={() => removeTodo(item.id)}>Remove</button>
                </div>
            ))
        }
    </div>
  )
}

export default Todo