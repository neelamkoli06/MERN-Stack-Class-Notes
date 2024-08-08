import React, { useDebugValue, useDeferredValue, useId, useImperativeHandle, useInsertionEffect, useLayoutEffect, useTransition } from 'react';

import CustomHook from './Custom_Hook';

const App = () => {

  //2- declared in a varaiable and called
  var data = CustomHook();


  //we can reused same hook multiple times by defining new variables
  var data2 = CustomHook();


  //we can defined multiple hooks
  // ********************************************************************************************


  //Additional Hooks In React

  const Id = useId();
  console.log(Id);


  // useDebugValue()-useDebugValue can be used to display a label for custom hooks in React DevTools.

  // useDeferredValue()-
  // Returns a deferred version of the value that may “lag behind” it.
  // This is commonly used to keep the interface responsive when you have something that renders
  //  immediately based on user input and something that needs to wait for a data fetch.
  // A good example of this is a text input.


  // useImperativeHandle()
  // useInsertionEffect()

  // useTransition()

  // Allows components to avoid undesirable loading states by waiting for content to load before transitioning to the next screen. It also allows components to defer slower,
  //  data fetching updates until subsequent renders so that more crucial updates can be rendered immediate

  // useLayoutEffect()-
  // useLayoutEffect can hurt performance. Prefer useEffect when possible.
  // useLayoutEffect is a version of useEffect that fires before the browser repaints the screen.

  // useOptimistic()

  // ********************************************************************************************




// useNavigate()
// useHistory()
// useLocation()
// useParams()
// useMatch()

// useState()
// useEffect()
// useRef()

// useContext()
// useReducer()
// useMemo() useCallback()

// Custom Hooks
// useId()

  return (
    <div>


      <center>
        <h1>Custom Hook Used In A React </h1>

        <h1>Hello Initial Count  {data.count}</h1>
        <button onClick={() => data.CountHandler()}>Update Count</button>
        <button onClick={() => data.CountHandler2()}>Reduce Count</button>


        <hr />

        <h1>Hello New Count {data2.count}</h1>
        <button onClick={() => data2.CountHandler()}>Update New Count</button>
      </center>

    </div>
  )
}

export default App



// 5 Button-

// + - * / 

// 1  2 Input Field- Take Input From User No1 and No2
// 2  1 Input field- Output display



