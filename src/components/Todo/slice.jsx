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
    setTodoInputValue: (state, action) => {
      state.todoInputValue = action.payload
    },
  },
})

export const { addTodo, setTodoInputValue } = todoSlice.actions
export default todoSlice.reducer  