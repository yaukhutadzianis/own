import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {addTodo, setTodoInputValue} from './slice'
import { CgCloseR } from "react-icons/cg";
import { IoIosArrowDropupCircle, IoIosArrowDropdownCircle } from "react-icons/io";

function Todo() {
  const dispatch = useDispatch()

  const todoList = useSelector((state) => state.todo.todoList)
  const todoInputValue = useSelector((state) => state.todo.todoInputValue)

  const [todo, setTodo] = useState(todoInputValue)

  // const [todoList, setTodoList] = useState([])

  // const addTodo = () => {
  //   setTodoList([...todoList, todo])
  //   setTodo('');
  // }

  // const removeTodo = (i) => {
  //   const todoListD = [...todoList]
  //   todoListD.splice(i, 1)
  //   setTodoList(todoListD)
  // }

  // const sortUp = (i) => {
  //   const todoListD = [...todoList]
  //   todoListD.splice(i, 1)
  //   todoListD.splice(i + 1, 0, todoListD[i])
  //   setTodoList(todoListD)
  // }

  // const sortDown = (i) => {
  //   const todoListD = [...todoList]
  //   todoListD.splice(i, 1)
  //   todoListD.splice(i + 1, 0, todoListD[i])
  //   setTodoList(todoListD)
  // }

  return (
    <div>

      <div className="container py-lg-5">
        <h1 className="mb-4">Todo</h1>
        <input onChange={(e) => {setTodo(e.target.value); dispatch(setTodoInputValue(e.target.value))}} value={todo} className="form-control mb-3" placeholder="Todo name" type="text" aria-label="input"></input>
        <button onClick={() => {dispatch(addTodo(todo)); setTodo('')}} type="button" className="btn btn-primary">Add</button>
      </div>

      <div className="container">
        <h2>Todos:</h2>
        <div className="d-flex flex-column">
          {todoList.map((e, i) => (
            <div key={`todos${i}`} className="bg-warning my-2 py-2 px-3 rounded d-flex justify-content-between align-items-center">
              <div>{e}</div>
              {/* <div className="d-flex justify-content-between align-items-center">
                <div onClick={() => sortDown(i)} className="d-flex ms-3" role="button"><IoIosArrowDropdownCircle size={23} /></div>
                <div onClick={() => sortUp(i)} className="d-flex" role="button"><IoIosArrowDropupCircle size={23} /></div>
                <div onClick={() => removeTodo(i)} className="d-flex ms-3" role="button">
                  <CgCloseR size={20} />
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>


    </div>
  )
}

export default Todo