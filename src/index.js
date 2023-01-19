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
import { getFirestore} from 'firebase/firestore/lite';





const firebaseConfig = {
  apiKey: "AIzaSyAgKAzapWyDp96VLrhAwzwNgTCVNkXvthQ",
  authDomain: "fbreactoos.firebaseapp.com",
  projectId: "fbreactoos",
  storageBucket: "fbreactoos.appspot.com",
  messagingSenderId: "509916133363",
  appId: "1:509916133363:web:db54ec6f7744e257f44486"
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