import React from "react";
import { NavLink } from "react-router-dom";

export default function PageNotFound() {
    return (

        <>

            <h2 className="text-danger mt-3 fw-bold text-center">404- Not Found</h2>

            <h4 className="text-center  my-4 p-4 text-dark"> <span className="text-warning">Looking for something?</span>
                <br /> We're sorry. The Web address you entered is not a functioning page on our site.
                <br />

              <NavLink  to='/' className="mt-3 fw-bold text-primary nav-link"> Go To Home Page</NavLink>  
            </h4>


        </>
    )
}