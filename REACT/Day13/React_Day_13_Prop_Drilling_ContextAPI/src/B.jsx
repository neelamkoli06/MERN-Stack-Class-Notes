import React from 'react'
import C from './C'

const B = (props) => {
    return (
        <div>

            <center>
                <h1>Component B Data-</h1>

                <C empId={props.empId} empRole={props.empRole} />
            </center>
        </div>
    )
}

export default B
