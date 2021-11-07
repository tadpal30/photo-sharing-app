import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebaseConfig = {
  apiKey: "AIzaSyB7_Ec4jgQyO7CylhCr-SPAUDj7tPg9vYk",
  authDomain: "photo-sharing-app-4ca35.firebaseapp.com",
  projectId: "photo-sharing-app-4ca35",
  storageBucket: "photo-sharing-app-4ca35.appspot.com",
  messagingSenderId: "201310600633",
  appId: "1:201310600633:web:d4762e38c37635f8e6ca68",
  measurementId: "G-8PYTH7NT10"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
