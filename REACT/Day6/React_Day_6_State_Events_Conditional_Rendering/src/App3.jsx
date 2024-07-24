import React from "react";

class App3 extends React.Component {


    constructor() {
        super()

        this.state = ({
            Product_name: 'Laptop',
            P_Price: '220$',
            P_Desc: 'Lorem',
            P_Brand: 'HP',


            //1
            show: true,



        })
    }


    ToggleData = () => {
        // alert("Hello")



        this.setState({
            show: !this.state.show,
        })

        // if (this.state.show) {
        //     this.setState({
        //         show: false,
        //     })
        // }

        // else {
        //     this.setState({
        //         show: true,
        //     })
        // }

    }



    render() {
        console.log(this.state);

        return (
            <>

                <h1>Hello Conditional Rendering In a React JS</h1>

                <button onClick={() => this.ToggleData()}>Toggle Data</button>


                {/* 2 */}
                {/* conditional Renering  */}

                {/* Ternary Operator
                
                condition ? true :false
                */}

                {/* OR */}

                {/* logical && operator */}

                {

                    this.state.show ?
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Consequatur accusamus deleniti sunt facere minima, odit excepturi labore, asperiores iste ipsum dolorem id quibusdam aperiam repellendus fugit cupiditate
                            quos est numquam ullam error maxime fuga, esse at.
                            Rerum aliquam rem totam!</p> : null

                }

                {/* logical && operator */}


                {

                    this.state.show && <p>Hello World</p>
                }






                {/* ******************************************************** */}


                {/* method */}
                {/* return new array and iterating array object data */}

                {/* {


                    obj.map((val, index, array) => {
                        console.log(val.P_Brand);
                    })
                } */}





            </>
        )
    }
}


export default App3;