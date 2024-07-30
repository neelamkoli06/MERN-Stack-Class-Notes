import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';



// import App component
import App from './App';

import { name,Sum } from './App'
import App2 from './App2';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <h1>Hello Welcome To The React Compponents</h1> */}
    <App  name="Prashant"/>

    <h1>Hello Your Name Is =   {name} </h1>


    <h1>Total Sum Is {Sum(100,200)}</h1>
    <h1>Total Sum Is {Sum(100,500)}</h1>

    <hr/>
    <App2 name="Aaman" isEligible={true}  />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
