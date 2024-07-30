import React from "react";

class App2 extends React.Component {


    // automatically called
    //used to create object and set values in obeject using this keyword
    // this keyword

    constructor(props) {

        // base/parent class-  child/Derived class

        super(props);
        console.log("Constructor Called");


        // state object defined 
        this.state = ({
            // key:value
            id: 1,
            name: 'Pratik',
            skill: 'MERN Stack',
        })
    }

    // this.state = ({
    //     key: value
    // })


    render() {


        console.log(this.state);


        // Access props data
        console.log(this.props);

        return (
            <>


                <h1>Welcome To The Statefull Class Component </h1>

                <h1>Hello Your Name Is {this.state.name}  And Your Skill Is {this.state.skill}</h1>


                <hr/>
                <h1>Props Data- {this.props.name}</h1>

            </>
        )

    }


}

export default App2;