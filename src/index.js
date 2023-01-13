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

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, setDoc, doc, docRef } from 'firebase/firestore/lite';





const firebaseConfig = {
  apiKey: "AIzaSyAa8ohfH3Z5v2nRa5ve6sj5fwwzOg2QqgI",
  authDomain: "reactoos.firebaseapp.com",
  projectId: "reactoos",
  storageBucket: "reactoos.appspot.com",
  messagingSenderId: "748289109250",
  appId: "1:748289109250:web:193c93242101237d64e61b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// async function getCards(db) {
//   const cardsCol = collection(db, 'cards');
//   const cardSnapshot = await getDocs(cardsCol);
//   const cardList = cardSnapshot.docs.map(doc => doc.data());
//   return cardList;
// }

// setDoc(doc(db, "cards", "sdfgdf5r5"), {title: "tststststs2"});




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

const AppContext = createContext(null);
const contextValue = {
  firebase: {
    db
  }
}


root.render(
  <Provider store={store}>
    <AppContext.Provider value={contextValue}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  </Provider>
);
 

export default AppContext