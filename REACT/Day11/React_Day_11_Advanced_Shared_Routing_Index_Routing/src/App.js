import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import PageNotFound from './PageNotFound';
import Navbar from './Navbar';
import App_Layout from './App_Layout';
import Admin from './Admin';

const App = () => {
  return (
    <>

      <Router>

        <Routes>

          {/* Multiple Route */}


          {/* nesting routing-one route into another route */}

          {/* parent route */}
          <Route path="/" element={<App_Layout />}>

            {/* index routing */}
            <Route index element={<Home />} />

            {/* Child route */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Service />} />

            {/* fallback routing */}

            <Route path='*' element={<PageNotFound />} />

          </Route>


{/* ************************************************************************* */}
          {/* admin routing */}
          <Route path='/admin' element={<Admin />}>

            {/* <Route path='/admin/forgotpassword' element={<ForgorPassword/>} /> */}
            <Route index element={<h1>Signup</h1>} />
            <Route path='forgot' element={<h1>Forgot Password</h1>} />

          </Route>

{/* *********************************************************************************** */}

        </Routes>
      </Router>



    </>
  )
}

export default App
