import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import MainpageTpl from './templaes/MainpageTpl';
import TodoTpl from './templaes/TodoTpl';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainpageTpl />,
  }, {
    path: "/todo",
    element: <TodoTpl />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router} />
);

