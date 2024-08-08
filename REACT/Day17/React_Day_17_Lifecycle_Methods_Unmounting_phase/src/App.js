import React, { Component } from 'react'
import Child from './Child';

export default class App extends Component {

  //1
  constructor() {


    console.log('Constructor called')
    super()

    this.state = ({
      name: 'John',


      show: true,
    })
  }


  //2
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps Method Called');
    return null;
  }

  //4

  componentDidMount() {
    console.log('componentDidMount Method called')
  }
  // ***********************************************************

  // shouldComponentUpdate(nextProps, nextState) {

  //   console.log("shouldComponentUpdate Called");
  //   return true;

  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {

  //   console.log('getSnapshotBeforeUpdate Method Called');
  //   return null;
  // }



  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log('componentDidUpdate')
  // }

  // **************************************************************************


  UnMountComp = () => {

    // alert("")

    this.setState({
      show: !this.state.show,
    })
  }


  // **************************************************************************
  //3
  render() {

    console.log('render method called')
    return (
      <>


        <center>
          <button onClick={() => { this.setState({ name: 'Peter' }) }}>Update State - {this.state.name}</button>
          <h1>React Lifecycle Method Unmounting Phase</h1>

          <button onClick={() => this.UnMountComp()}>Unmount Component</button>



          {

            this.state.show ? <Child /> : <p>Component is Deleted</p>
          }



        </center>


      </>
    )
  }
}
