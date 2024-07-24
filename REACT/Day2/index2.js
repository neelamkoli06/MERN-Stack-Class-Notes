
import React from 'react';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  // ways to rendering data on a browser
  // <h1>Welcome To The Most Demanding ReactJS World </h1>

  // ************************************
  // 2 way

  // <div>
  //   <h1>Welcome To The Most Demanding ReactJS World </h1>
  //   <h1>Welcome To The Most Demanding ReactJS World </h1>
  //   <h1>Welcome To The Most Demanding ReactJS World </h1>
  // </div>

  // ******************************************

  // [

  //   <h1>Welcome To The Most Demanding ReactJS World </h1>,
  //   <h1>Welcome To The Most Demanding ReactJS World </h1>,
  //   <h1>Welcome To The Most Demanding ReactJS World </h1>,
  //   <h1>Welcome To The Most Demanding ReactJS World </h1>,

  // ]

  // **************************************************
  // Modern React Feature

  // empty container 
  //used to wrap JSX Code i.e wrapper
  // object of keys
  // 
  //   <React.Fragment>
  //     <h1>Welcome To The Most Demanding ReactJS World 1 </h1>
  //     <h1>Welcome To The Most Demanding ReactJS World 2 </h1>
  //     <h1>Welcome To The Most Demanding ReactJS World 3 </h1>
  //     <h1>Welcome To The Most Demanding ReactJS World 4 </h1>
  //  </React.Fragment>

  //  OR - <> </>

  // <>

  //   <h1>Welcome To The Most Demanding ReactJS World 1 </h1>
  //   <h1>Welcome To The Most Demanding ReactJS World 2 </h1>
  //   <h1>Welcome To The Most Demanding ReactJS World 3 </h1>

  // </>


  // <React.StrictMode>  </React.StrictMode>

  // gives warning and highlight possible problmes
  // Lets you find common bugs in your components early during development.


  <React.StrictMode>
    <h1>Hello 1</h1>
    <h1>Hello 2</h1>
    <h1>Hello 3</h1>
    <h1>Hello 4</h1>
  </React.StrictMode>


  // ************************************

)