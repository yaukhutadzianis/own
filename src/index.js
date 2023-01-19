import React, { createContext, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import MainpageTpl from './templaes/MainpageTpl';
import TodoTpl from './templaes/TodoTpl';

import todoReducer from './components/Todo/todoSlice';

import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainpageTpl />,
  }, {
    path: "/todo", 
    element: <TodoTpl />, 
  },
]);

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
);










// const getData = async () => {
// // Add a new document with a generated id.
// const res = await db.collection('cards').add({
//   title: 'Tokyo',
// });

// console.log('Added document with ID: ', res.id);
// }
// useEffect(() => {
//    // Fetching Data on Initial Load
//    getData()
// },[])