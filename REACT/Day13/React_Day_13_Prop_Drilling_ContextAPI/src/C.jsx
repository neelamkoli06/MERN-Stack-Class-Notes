import React from "react";
import D from "./D";

const C = (props) => {


    console.log(props);
    const { empId, empRole } = props;
    return (
        <>

            <center>
                <h1>Component C Data - </h1>
                <D empId={empId} empRole={empRole} />
            </center>

        </>
    )
}


export default C;