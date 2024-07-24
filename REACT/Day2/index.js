import React from 'react'
import ReactDOM from 'react-dom/client';


// import Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';



// import CSS React
import './index.css';

let name = "Shailesh";
let skill = "ReactJS Developer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <h1>Hello Welcome To The JSX </h1>


    {/* JSX element 'input' has no corresponding closing tag.ts(17008) */}
    <input type="text" placeholder='enter your name' />
    <hr />
    <br />

    {/* *********************************** */}
    {/* CSS styling */}


    <h1 style={{ color: 'orange', textAlign: 'center' }} className="heading">Welcome To Modern JSX Code</h1>


    {/* ***************************************************************** */}
    {/* JS Write */}

    <h1>Your Name Is {name} And Your Skill Is <mark>{skill} </mark> </h1>
    <h1> Sum is {30 + 20}</h1>
    <h1> {alert("Hello JSX")}</h1>


    {/* ********************************************************* */}

    {/* Images/Media Files */}

    <img src="Assets/logo192.png" />
    <img src="logo512.png" style={{ height: '100px' }} />

    {/* ***********************************************************8 */}

    {/* 3rd Party integration */}

    {/* Bootstrap */}

    <button className='btn btn-danger px-4'>Hello Bootstrap </button>
    <h1 className='bg-dark p-4 text-warning text-center'>Welcome Bootstrap To Modern JSX</h1>

    <button className='btn btn-outline-primary px-4 my-4'>outline-button</button>


  </React.StrictMode>
)