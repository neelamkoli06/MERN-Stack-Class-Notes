import React from "react";
import B from "./B";

const A = (props) => {


    console.log(props);
    const { empId, empRole } = props;

    return (
        <>

            <center>
                <h1>Component A Data :  </h1>
                <B empId={props.empId} empRole={props.empRole} />
            </center>

        </>
    )
}


export default A;