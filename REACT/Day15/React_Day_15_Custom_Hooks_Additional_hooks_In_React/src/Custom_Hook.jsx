import React, { useState } from "react";

const CustomHook = () => {

    // 1
    const [count, setCount] = useState(0);


    //2- defined hook /function
    const CountHandler = () => {
        // state update
        setCount(count + 5)
    }

    // *****************************************
    const CountHandler2 = () => {
        setCount(count - 1);
    }


    // *********************************************
    //return 
    return {
        CountHandler,
        count,//initial count

        CountHandler2,

    }

}

export default CustomHook;