import React, { useMemo, useState } from 'react'

export default function UseMemo() {

    // state defined

    const [count, setCount] = useState(0)
    const [item, setItem] = useState(1)





    //defined function

    // const demo = () => {
    //     console.log("demo function called");
    // }

    // const demo1 = () => {

    //     console.log("demo 1 function called");
    // }


    // *************************************************************
    // useMemo will only recompute the memoized value when one of the deps has changed.

    // memoized value- 
    //function doesnt execute on each and very rendering but
    //  called only when one of its dependencies or input value changed

    const demo = useMemo(() => {
        console.log("Hello useMemo function Called")
        return count + 5;
    }, [count])


    // ************************************************************************************************

    // The React useCallback Hook returns a memoized callback function.

    // Think of memoization as caching a value so that it does not need to be recalculated.

    // This allows us to isolate resource intensive functions so that they will not automatically run on every render.

    // The useCallback Hook only runs when one of its dependencies update.

    // This can improve performance

    return (
        <div>


            <h1>useMemo and useCallback For Performance Optimization</h1>


            {/* useMemo */}
            {/* Avoid reloading of your application or components due to multiple functions callback */}

            {/* 20 function */}

            {/* Only call that function when we required */}

            {/* i.e called only when one of its value or dependencies changed */}




            <h1>Initial Count :  {count}</h1>
            <h1>Initial Item  {item}</h1>


            <button onClick={() => setCount(count + 1)}>Update Count</button>
            <button onClick={() => setItem(item + 1)}>Update Item</button>


            <h1>{demo}</h1>
        </div>
    )
}
