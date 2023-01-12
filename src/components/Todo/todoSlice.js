import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoInputValue: '',
    todoList: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoList = [...state.todoList, action.payload]
    },
    removeTodo: (state, action) => {
      state.todoList.splice(action.payload, 1)
    },
    sortUp: (state, action) => {
      state.todoList.splice(action.payload, 1)
      state.todoList.splice(action.payload + 1, 0, state.todoList[action.payload])
    },
    sortDown: (state, action) => {
    state.todoList.splice(action.payload, 1)
    state.todoList.splice(action.payload + 1, 0, state.todoList[action.payload])
    },
    setTodoInputValue: (state, action) => {
      state.todoInputValue = action.payload
    },
  },
})

export const { addTodo, removeTodo, sortUp, sortDown, setTodoInputValue } = todoSlice.actions
export default todoSlice.reducer  