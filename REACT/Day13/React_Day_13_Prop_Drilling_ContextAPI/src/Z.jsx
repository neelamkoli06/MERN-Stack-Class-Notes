import React from 'react';

//2

//Accepts a context object (the value returned from React.createContext) 
// and returns the current context value,
// as given by the nearest context provider for the given context.

import { useContext } from 'react';


//1 -import created context
import { empID, empPAN } from './CreateContext';

// Used context




const Z = () => {

    // Used

    var employeeID = useContext(empID);
    var employeePAN = useContext(empPAN);

    return (
        <div>

            <h1> Component Z </h1>

            <h1> Hello Your Emp ID is <mark>{employeeID}</mark></h1>
            <h1> Hello Your PAN No is <mark>{employeePAN}</mark></h1>

        </div>
    )
}

export default Z
