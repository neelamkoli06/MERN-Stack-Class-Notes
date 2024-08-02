import React from "react";

const D = (props) => {

    return (
        <>

            <center>

                <hr />
                <h1>Component D Data</h1>
                <h1>Hello Your Id Is {props.empId}</h1>
                <h1>Hello Your RoleIs {props.empRole}</h1>
            </center>

        </>
    )
}


export default D;