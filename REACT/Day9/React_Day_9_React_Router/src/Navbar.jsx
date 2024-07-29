import React from 'react'
import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    return (
        <>

            <nav className='navbar navbar-expand-lg navbar-light bg-dark'>

                <a href="/" className='navbar-brand'><h2 className='text-warning'>React Router</h2></a>

                <ul className='navbar-nav m-auto'>
                    <li className='nav-item'>

                        <NavLink to='' className="nav-link text-light">Home</NavLink>

                    </li>

                    <li className='nav-item mx-3'>
                        {/* <a href="/about" className='nav-link text-light'>About Us</a> */}

                        {/* Navlink-
                        
                        Updated in v6
                        by default active class
                        i.e we get to know currently in which component we are


                        In version 5

                        <link></link>
                        */}
                        <NavLink to='/service' className="nav-link text-light">Our Services</NavLink>
                    </li>

                    <li className='nav-item mx-3'>
                        <NavLink to='/contact' className="nav-link text-light"> Contact Us</NavLink>
                    </li>

                    <li className='nav-item mx-3'>
                        <NavLink to='/about' className="nav-link text-light"> About Us</NavLink>
                    </li>

                    <li className='nav-item mx-3'>
                        <NavLink to='/blog' className="nav-link text-light">Our Blogs</NavLink>
                    </li>


                </ul>



            </nav>



        </>
    )
}

export default Navbar
