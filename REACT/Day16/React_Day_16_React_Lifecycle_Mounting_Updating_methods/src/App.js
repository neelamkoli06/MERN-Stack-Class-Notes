import React from 'react';

export default class App extends React.Component {



  //getInitialState()
  // Executes methods before creation of your components



  //1
  constructor(props) {
    super(props);

    console.log("Constructor Called");

    this.state = ({
      name: 'Aaman',
      skill: 'React',

      color:'orange',
    })
  }

  // ***************************************************************************

  // The static keyword defines static methods for classes.i.e Called method without creating instance of that class

  //Method called on each and every rendering i.e Not Used mostly
  static getDerivedStateFromProps(props, state) {
    console.log(" getDerivedStateFromProps method called");
    console.log(state);
    console.log(props);

    // must return something
    return null;
  }



  // ***************************************************************************

  // Most Important Method

  //Used to Perform side effect to our component
  // do something after render method
  // API Calling,network request handle, set timers

  // Called after render method

  //Similar to useEffect
  componentDidMount() {

    console.log("ComponentDidMount Method Called !!");



    setTimeout(()=>{

      this.setState({
        color:'purple'
      })

    },3000)


    // 

    setTimeout(()=>{

      this.setState({
        color:'magenta'
      })

    },5000)

  }

  // ***************************************************************************



  //2-render method
  //
  render() {

    console.log("Render Method Called!!")
    return (
      <>

        <h1 style={{color:this.state.color}}>React Lifecycle Methods In a Class Component - Mounting Phase</h1>
        <hr />


        <button onClick={() => this.setState({ name: 'Akhilesh',color:'tomato' })}>Update State </button>
        <h1>Name : {this.state.name}</h1>

      </>
    )
  }
}