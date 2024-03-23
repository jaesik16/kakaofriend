import React from 'react';
import ReactDOM from 'react-dom/client';
import WrapComponent from './WrapComponent.jsx';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './reducer/menuReducer.js';
import confirmReducer from './reducer/confirmReducer.js';
import userSignIn from './reducer/userSignIn.js';
import adminSignIn from './reducer/adminSignIn.js';
import cartReducer from './reducer/cartReducer.js';
let store = configureStore({
  reducer:{
    menuReducer,
    confirmReducer,
    userSignIn,
    adminSignIn,
    cartReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <WrapComponent />
    </Provider>
  </React.StrictMode>
);