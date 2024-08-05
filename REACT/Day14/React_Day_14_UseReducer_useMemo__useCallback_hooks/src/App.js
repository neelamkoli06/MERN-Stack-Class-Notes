import React, { useReducer, useState } from 'react';


const App = () => {

  // useState
  // const [count, setCount] = useState(0);

  //2
  // const [initialState, dispatch] = useReducer(reducer, initialData);



  // useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values.
  //  It also lets you optimize performance for components that trigger deep 
  //  updates because you can pass dispatch down instead of callbacks.

  //2

  // handle all logical part
  const reducer = (state, action) => {
    // 
    // alert(state.count);
    // alert(action.type);

    // 
    switch (action.type) {

      case 'Inc':
        return { count: state.count + 1 }

      case 'Dec':
        return { count: state.count - 1 }

      default: {
        return state.count
      }


    }



  }


  const initialState = { count: 0 }

  //2
  const [state, dispatch] = useReducer(reducer, initialState);




  return (
    <>


      {/* useReducer */}

      {/* is a Alternative to useState hook */}

      {/* Used to handle complex state logic */}
      {/* Used to handle multiple cases, operations at  a same time */}

      <h1>useReducer Hooks For Performance Optimization </h1>


      {/* 3 */}

      <center>

        <h1>Initial State -  {state.count}</h1>


        {/* 2 */}
        <button onClick={() => dispatch({ type: 'Inc' })}>INC</button>
        <b>&nbsp; {state.count}  &nbsp;</b>
        <button onClick={() => dispatch({ type: 'Dec' })}>DEC</button>

      </center>

    </>
  )
}

export default App
