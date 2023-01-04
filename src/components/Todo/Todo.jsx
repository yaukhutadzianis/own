import React, { useState } from 'react'

function Todo() {

  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  const addTodo = () => {
    setTodoList([...todoList, todo])
    setTodo('');
  }

  return (
    <div>
        <div className="container py-lg-5">
            <h1 className="mb-4">Todo</h1>
            <input onChange={(e) => setTodo(e.target.value)} value={todo} className="form-control mb-3" placeholder="Todo name" type="text" aria-label="input"></input>
            <button onClick={() => addTodo()} type="button" className="btn btn-primary">Add</button>
        </div>
    </div>
  )
}

export default Todo