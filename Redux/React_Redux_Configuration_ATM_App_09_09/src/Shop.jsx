import React from 'react';


// useSelector hook- to access or read current state data
// A function that receives the current state and returns a part of the state or some derived data.
import { useSelector } from 'react-redux';


const Shop = () => {

    const bal = useSelector((state) => state.amount)
    //amount-  combineReducers file wala
    return (
        <>

            <nav className='navbar nabvbar-expand-lg bg-dark'>
                <a href="" className='navbar-brand'><h2 className='text-warning fw-bold mx-3'>Redux App</h2></a>

                <ul className='navbar-nav m-auto'>

                    <li className='nav-item'>
                        <button className='btn btn-danger px-4 fw-bold '>Current Balance : <span className='text-light ms-2'> {bal}  </span>  </button>
                    </li>
                </ul>

            </nav>


        </>
    )
}

export default Shop
