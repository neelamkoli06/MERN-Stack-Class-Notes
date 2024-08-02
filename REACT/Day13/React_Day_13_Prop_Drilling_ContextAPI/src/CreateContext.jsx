import React, { useState } from 'react';

//1

// Lets you create a Context that components can provide or read.
import { createContext } from 'react';
import Z from './Z';


//2- defined context variable and called createContext function 
const empID = createContext();
const empPAN = createContext();



const CreateContext = () => {


    const [empid, setEmpId] = useState(3456);

    return (
        <>
            <h1>Create Context In a Functional Component</h1>

            {/* 3- Pass value to that created conext and pass to consumer with provider property */}

            <empID.Provider value={empid}>
                <empPAN.Provider value="ABCDE1234F">
                    
                    {/* consumer */}
                    <Z />
                </empPAN.Provider>
            </empID.Provider>

        </>
    )
}


export default CreateContext

//4 - export created context
export { empID, empPAN }


// 1st Step- Create Context

// 1-import createContext function from react to create context

//2- defined context variable and called createContext function

// 3- pass a data to created context and to consumer through provider property

// 4 - export that created context


// **********************************

// Use context

// 1st step = import created context

// 2 - import useContext hook

// 3 - defined variable and called useContext hook and also passed imported context into that hook