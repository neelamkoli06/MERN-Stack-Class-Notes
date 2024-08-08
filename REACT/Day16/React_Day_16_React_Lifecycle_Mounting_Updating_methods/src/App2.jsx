import React, { Component } from 'react'

export default class App2 extends Component {

    constructor() {
        super();
        console.log("Constructor Called !!");

        this.state = ({
            empName: 'Praik',
            empRole: 'Developer',
            empEmail: 'pratik@gmail.com',
        })
    }


    // ****************************************
    static getDerivedStateFromProps(props, state) {
        console.log("getDerviedStateFromProps Called")
        return null;
    }



    // Called immediately after a component is mounted. Setting state here will trigger re-rendering.
    componentDidMount() {
        console.log("ComponentDidMount Called")
    }


    // *******************************************


    // shouldComponentUpdate();

    //It says and determine should i render or not state and props changes

    // Used to when react doesn't want to render state props changes

    // should i render or not ?
    // return true;

    //If false is returned, Component.render, componentWillUpdate (replaced- getSnapShotBeforeUpdate()) and componentDidUpdate will not be called

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate Method Called");

        console.log(nextState);

        return true;
        // return false;
    }

    // ********************************************************************

    // getSnapshotBeforeUpdate()

    // Return a snapshot before DOM Update
    // getSnapshotBeforeUpdate()
    // This method is called right before updating the DOM. It has access to props and state before the update

    // replaced by componentWillUpdate()

    // Not used at All;
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevState);
        console.log(" getSnapshotBeforeUpdate Method Called !!");

        return null;
        // return prevState;
    }


    // Note- getSnapshotBeforeUpdate() should be used with componentDidUpdate().


    // ************************************************************************


    //Called immediately after updating occurs. Not called for the initial render.

    // Used for shallow comparsion of prev and Current state and props and conditionally rendering


    // The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate Method Called');

        if (this.state.empEmail !== prevState.empEmail) {
            console.log(this.state.empEmail);
        }
        return true;
        
    }





    // *******************************************


    render() {

        console.log("render method called")
        return (
            <div>

                <center>

                    <h1>React Lifecycle Updating Phase</h1>
                    <hr />


                    <h1>Your Email Is {this.state.empEmail}</h1>


                    <button onClick={() => this.setState({ empEmail: 'pratik123@gmail.com' })}>Update Something </button>


                </center>

            </div>
        )
    }
}
