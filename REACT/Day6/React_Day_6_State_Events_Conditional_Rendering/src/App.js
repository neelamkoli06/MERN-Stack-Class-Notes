import React from "react";

export default class App extends React.Component {


  constructor(props) {

    super(props);
    console.log('Constructor Called');


    this.state = ({
      // key:value

      id: 1,
      name: 'Akhilesh',
      skill: 'MERN Stack',
      count: 0,
    })

  }

  // *********************************************************
  // *********************************************************

  Demo1 = () => {
    alert("Hello World")
  }



  Demo2 = () => {
    alert("Hello Events in React using Arrow Function")
  }

  // *********************************************************
  // Update State


  UpdateState = () => {
    // alert("Called");

    // state update

    // by default trigger render method
    this.setState({
      name: 'Pranav',
      skill: 'ReactJS',

      empCTC: '20LPA',


    })
  }


  // *******************************************************

  UpdateCount = () => {

    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {


    console.log(this.state);

    console.log(this.props);

    // Normal Function
    const Demo4 = () => {
      alert("Events in class Component using Normal Function");
    }


    return (
      <>
        <h1>Welcome To The Statefull Class Component</h1>

        <h1>Your Name Is <mark>{this.state.name}</mark> and Your SKill is {this.state.skill}</h1>
        <button onClick={() => this.UpdateState()}>Update State</button>

        {/* ********************************************************************************************************* */}

        <h1>Hello You Visited {this.state.count} times</h1>

        <button onClick={() => this.UpdateCount()}>Update Count</button>
        
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>Reduce Count</button>
        {/* ****************************************************************************************** */}

        <h1>Your Role Is {this.props.empRole}</h1>

        {/* ******************************************************************************************************** */}
        {/* Events In Class Component React */}
        <button onClick={this.Demo1}>Click Here</button>

        {/* 2 way */}
        <button onClick={() => this.Demo2()}>Click Here 2</button>

        {/* 3 way */}
        <button onClick={() => alert('Hello Events In Reacts')}>Click Here 3</button>

        {/* 4 way */}
        <button onClick={Demo4}>Click Here Normal Function</button>


      </>
    )
  }
}