import React, { Component } from 'react'

export default class App2 extends Component {


    constructor() {

        super();

        this.state = ({

            show: true,

        })
    }
    render() {
        return (
            <div>

                {/* <button onClick={()=>this.setState({show:false})}>Toggle Data </button> */}
                <button onClick={()=>this.setState({show:!this.state.show})}>Toggle Data </button>


                {
                    // ternary operator
                    this.state.show ? <h1>Welcome To The Class Component </h1> : null

                    // logical &&
                    // this.state.show &&  <h1>Welcome To The Class Component </h1>
                }

            </div>
        )
    }
}
