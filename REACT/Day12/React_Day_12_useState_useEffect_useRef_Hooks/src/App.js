import React, { useEffect } from 'react';

//1
import { useState } from 'react';

const App = () => {


  //2 defined State

  // const[initialState,setState]=useState(initialdata)

  // const [data, setData] = useState({});
  // const [name, setName] = useState([]);

  const [name, setName] = useState('Pratik');

  //counter state
  const [count, setCount] = useState(0)


  //color state defined

  const [color, setColor] = useState('orange');






  // Update State

  // In class=this.setState({})

  const UpdateName = () => {
    setName('Akhilesh')
  }



  // update count

  const UpdateCount = () => {
    setCount(count + 1);
  }


  // ************************************************************************

  //  
  // useEffect()

  // Used to perform side effects on our component or application
  // do something after rendering

  // Mostly Used to API Calling, network request handle, set Timers, side effects......

  // directly updating the DOM, 


  //  1  


  // It called multiple times on each and every data rendering

  // useEffect(() => {
  //   alert('Hello useEffect Hook');
  // })


  // *************************************************************
  //2- to avoid multiple time rendering
  //pass a  array empty dependency

  // useEffect(() => {
  //   alert('Hello useEffect called on initial Rendering')
  // }, [])


  // ***************************************************************


  //3- we want side effect on count when we click on count update
  useEffect(() => {
    alert("Hello useEffect Called ")
  }, [name])

  // []-If present, effect will only activate if the values in the list change.



  // **************************************************************

  useEffect(() => {

    setTimeout(() => {
      setColor('blue');
    }, 3000)


    setTimeout(()=>{
      setColor('red')
    },5000)

  }, [])





  return (
    <>

      {/* useState-

        // Returns a stateful value, and a function to update it.


            it holds the statefull data of our component

            Mutable i.e we can update or change state whenever we want on any action , event

            Syntax-const[initialState,setState]=useState(initialdata)


            By default trigger render method

 */}


      {/* *********************************************************************************************** */}




      {/* *********************************************************************************************** */}

      <h1>Hooks In a Stateless Functional Component</h1>
      <hr />

      <h1>Hello Your Name Is {name}</h1>

      <button onClick={() => UpdateName()}>Update State</button>
      <hr />


      <h1>Hello You Visited  <mark>{count}  </mark>times</h1>

      <button onClick={() => UpdateCount()}>Update Count</button>
      <button onClick={() => setCount(count - 1)}>Reduce Count</button>


      <hr />

      <h1 style={{ color: color }}>Welcome To The Color State</h1>
      <button onClick={() => setColor('purple')}>Update Color</button>

    </>
  )
}

export default App
