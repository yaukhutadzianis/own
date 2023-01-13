import React from 'react';
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

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa8ohfH3Z5v2nRa5ve6sj5fwwzOg2QqgI",
  authDomain: "reactoos.firebaseapp.com",
  projectId: "reactoos",
  storageBucket: "reactoos.appspot.com",
  messagingSenderId: "748289109250",
  appId: "1:748289109250:web:193c93242101237d64e61b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

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
 
