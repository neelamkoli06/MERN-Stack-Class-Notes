import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const App_Layout = () => {
    return (
        <div>
            <Navbar />
            {/* Renders the child route's element, if there is one. */}
            {/* It allows us to shared one component into another multiple component without import and export */}
            <Outlet />

            <Footer />

        </div>
    )
}

export default App_Layout
