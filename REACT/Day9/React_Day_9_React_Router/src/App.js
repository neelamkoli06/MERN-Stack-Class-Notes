import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import PageNotFound from './PageNotFound';

const App = () => {
  return (
    <>
      {/*     
    <h1>Welcome To The React Router</h1> */}

      {/* React Router Setup/ Configuartion */}


      {/* is a module or package which is used connect with browser urls */}
      {/* Provide cleanest url's */}


      {/* no need */}
      {/* <BrowserRouter> */}


      {/* A <Router> for use in web browsers. Provides the cleanest URLs. */}
      <Router>
        <Navbar />

        {/* boundary / wrapper to defined our multiple route */}
        {/* container to defined route */}
        <Routes>

          {/* multiple route */}

          {/* Declares an element that should be rendered at a certain URL path. */}
          <Route path='/' element={<Home />}>  </Route>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='blog' element={<h1>Blog Page</h1>} />
          <Route path='service' element={<Service />} />


          {/* fallback routing */}
          {/* * -wild card */}
          <Route path='*' element={<PageNotFound />} />
          {/* <Route path='*' element={<Home/>} /> */}

        </Routes>





      </Router>
      {/* </BrowserRouter> */}

    </>
  )
}

export default App
