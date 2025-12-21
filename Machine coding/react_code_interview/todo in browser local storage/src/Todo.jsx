import React, { useEffect, useState } from 'react'

function Todo() {
    const [todos, settodos] = useState([])
    const [input, setinput] = useState("")

    // useEffect(() => {
    //     let storedTodos = JSON.parse(localStorage.getItem('Todos'));

    //     settodos(storedTodos || []);

    //     console.log(todos);
    // }, [])

    async function addTodo(todo) {
        if (todo === "") return;

        let todoArray = await JSON.parse(localStorage.getItem("Todos")) || [];

        todoArray.push(todo);

        let newArrayToAdd = JSON.stringify(todoArray);

        localStorage.setItem("Todos", newArrayToAdd);

        let updatedTodos = JSON.parse(localStorage.getItem('Todos'));

        settodos(updatedTodos);

        setinput("");
    }

    async function removeTodo(index) {

        console.log(index)

        let todoArray = JSON.parse(localStorage.getItem('Todos'));

        todoArray = todoArray.filter(a => todoArray.indexOf(a) != index)

        localStorage.setItem('Todos', JSON.stringify(todoArray));

        let updatedArray = JSON.parse(localStorage.getItem('Todos'))

        settodos(updatedArray);
    }

    return (
        <div>
            <input type="text" value={input} onChange={(e) => setinput(e.target.value)} />
            <button onClick={() => addTodo(input)}>Add task</button>
            {todos.length > 0 ?
                <div>
                    {todos.map((todo, index) => (
                        <p key={index}>
                            {todo}
                            <button onClick={() => removeTodo(index)}>Remove</button>
                        </p>
                    ))}
                </div> : <p>There is no todos add a new todo</p>
            }
        </div>
    )
}

export default Todo;