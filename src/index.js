import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/index';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';

// Initializes firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzcnK5idTYGmjd_OVC65Jyq6al0Z6dS_w",
    authDomain: "boringbutbig-44dd6.firebaseapp.com",
    databaseURL: "https://boringbutbig-44dd6-default-rtdb.firebaseio.com",
    projectId: "boringbutbig-44dd6",
    storageBucket: "boringbutbig-44dd6.appspot.com",
    messagingSenderId: "330158917580",
    appId: "1:330158917580:web:5f9a942bfc811a9cebff69",
    measurementId: "G-N6HLZBZYFB"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
