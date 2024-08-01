import React, { useRef } from 'react'

const UseRef = () => {




    //2 defined
    const data = useRef(null);



    // Get Data

    const GetData = () => {
        // alert()

        // console.log(data);
        // console.log(data.current);

        console.log(data.current.value)

        // apply styling
        data.current.style.backgroundColor="orange";


        // update data

        data.current.value="Prashant";
    }


    return (
        <>

            <h1>UseRef Hooks In React Functional Statement</h1>


            {/* useRef- used to fetch mutable ref object data i.e changable data */}

            {/* To fetch here we need  ref attribute and current property */}

            {/* Performance Optimization */}


            {/* **************************************** */}
            {/* The useRef Hook allows you to persist values between renders.

It can be used to store a mutable value that does not cause a re-render when updated.

It can be used to access a DOM element directly. */}


            {/* *****************************************************************************8 */}


            {/* Does Not Cause Re-renders
If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.

To avoid this, we can use the useRef Hook. */}

            {/* ************************************************************************************************************** */}



            <label htmlFor="">Enter Your Email</label>

            {/* //3 */}
            <input type="email" name="" id="" ref={data} placeholder='enter your email' onChange={() => GetData()} />


        </>
    )
}

export default UseRef
