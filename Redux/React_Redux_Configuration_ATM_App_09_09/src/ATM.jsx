import React from 'react';

// to read or access current state
import { useSelector } from 'react-redux';

//A hook to access the redux dispatch function.
import { useDispatch } from 'react-redux';

// Import action to work on each action
import { actionCreators } from './State';


// bindactionCreators- to bind actionCreator, dispatj

import { bindActionCreators } from 'redux';


const ATM = () => {

    //called useSelector to reda current state
    const bal = useSelector((state) => state.amount);


    // Returns the dispatch function from the Redux store
    // A hook to access the redux dispatch function.
    const dispatch = useDispatch();


    // ********************************************************8
    // to bind actionCreators and dispatch

    const actions = bindActionCreators(actionCreators, dispatch);


    // more reduce
    //destructring
    const { Deposit, Withdraw } = actions;

    return (
        <>


            <div className="contaner-fluid">
                <div className="row">
                    <div className="col-md-12 mt-5 d-flex justify-content-center">

                        {/* <button className='fw-bold btn btn-danger px-4 mx-4' onClick={() => dispatch(actionCreators.Withdraw(5))}>Withdraw</button>
                        <h3>{bal}</h3>
                        <button className='fw-bold btn btn-dark px-4 mx-4' onClick={() => dispatch(actionCreators.Deposit(100))}>Deposit</button> */}


                        {/* Code Reduce */}
                        {/* <button className='fw-bold btn btn-danger px-4 mx-4' onClick={() => actions.Withdraw(10)}>Withdraw</button>
                        <h3>{bal}</h3>
                        <button className='fw-bold btn btn-dark px-4 mx-4' onClick={() => actions.Deposit(100)}>Deposit</button> */}


                        {/* more reduce */}
                        <button className='fw-bold btn btn-danger px-4 mx-4' onClick={() => Withdraw(10)}>Withdraw</button>
                        <h3>{bal}</h3>
                        <button className='fw-bold btn btn-dark px-4 mx-4' onClick={() => Deposit(100)}>Deposit</button>

                    </div>
                </div>
            </div >






        </>
    )
}

export default ATM
