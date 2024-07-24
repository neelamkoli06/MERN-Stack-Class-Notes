import React from 'react';

const App2 = () => {


  const Demo1 = () => {
    alert('Hello Events In Functional Component')
  }


  const Demo2 = () => {
    alert("Events In Functional Component ")
  }

  return (

    <>
      <h1>Welcome To The Stateless Functional Component</h1>

      <button onClick={Demo1}>Click Here</button>
      <button onClick={() => Demo2()}>Click Here 2</button>
      <button onClick={() => alert()}>Click Here 3</button>
    </>
  )
}

export default App2;