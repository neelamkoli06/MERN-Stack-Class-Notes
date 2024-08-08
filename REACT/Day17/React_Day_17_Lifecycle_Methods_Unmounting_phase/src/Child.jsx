import React, { Component } from 'react'

export default class Child extends Component {



    //Called immediately before a component is destroyed. Perform any necessary cleanup in this method,
    //  such as cancelled network requests, or cleaning up any DOM elements created in componentDidMount.
    componentWillUnmount() {

        console.log('componentWillUnmount Method Called !!')

    }
    render() {
        return (
            <div>


                <h1>Child Component 1</h1>
                <h1>Child Component 2</h1>


            </div>
        )
    }
}
