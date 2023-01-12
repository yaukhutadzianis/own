import React from 'react'
import {useSelector} from 'react-redux'

function TodosCount() {

  const todoListLength = useSelector((state) => state.todo.todoList.length)

  return (
    <div>Todos: {todoListLength}</div>
  )
}

export default TodosCount