import React, { useEffect, useRef, useState } from 'react'

const Task = () => {


    // 3 array object
    const User1 = [{ id: 1, name: 'John Peter', email: 'john@gmail.com', Role: 'Front end Developer' }]
    const User2 = [{ id: 2, name: 'Prashant Kakade', email: 'prashant@gmail.com', Role: 'MERN Developer' }]
    const User3 = [{ id: 3, name: 'Amol', email: 'amol@gmail.com', Role: 'AWS Engineer' }]


    // 3 
    // state defined

    const [data, setData] = useState(User1)
    console.log(data);



    // to fetch option value data

    const result = useRef(null)


    // ***************************************************************************
    // side effect

    useEffect(() => {
        alert("Congrats Successfully Fetch Data!!")
    }, [data])

    const getUser = () => {

        // alert(result.current.value)

        var a = result.current.value;
        if (a === 'user1') {
            setData(User1)
        }
        else if (a === 'user2') {
            setData(User2)
        }

        else {
            setData(User3);
        }

    }

    return (
        <>
            <h1>Basic Application Using useState, useEffect and UseRef Hooks</h1>
            <hr />

            <label htmlFor=""> Choose User</label>
            <select name="" id="" onChange={() => getUser()} ref={result}>
                <option value="user1">User 1</option>
                <option value="user2">User 2</option>
                <option value="user3">User 3</option>
            </select>


            {/* ******************************************************************* */}

            {/* Display and Iterate using Map */}

            {



                data.map((val) => {

                    return (
                        <>

                            <h1>Your Id : {val.id}</h1>
                            <h1>Your Name : {val.name}</h1>
                            <h1>Your Email : {val.email}</h1>
                            <h1>Your Role : {val.Role}</h1>


                        </>
                    )
                })
            }



        </>
    )
}

export default Task
