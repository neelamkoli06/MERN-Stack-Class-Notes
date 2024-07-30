import React from "react";

function App(props) {

    console.log(props);
    
    return (
        <React.Fragment>


            {/* HTML JS i.e JSX Code */}
            <h1>Welcome To The Stateless Functional Component -{props.name} </h1>

        </React.Fragment>
    )
}

// 1 default export
export default App;


// ******************************************************

// multiple names export
const name="Akhilesh and Pranav";


// *************************************************


const Sum=(a,b)=>{
    return a+b;
}

export {name,Sum};


// const obj={
//     name:name,
//     Addition:Sum,
// }


// export {obj};