import { useState } from 'react';

import Navbar from '../Pages/Navbar';
import Footer from '../Pages/footer';
import Hero from '../Pages/Hero';
import Aboutme from '../Pages/About';
import Skills from '../Pages/Skills'
import Work from '../Pages/Work'
import Contactform from '../Pages/contactform'
import { Outlet } from 'react-router-dom';

function RootLayout() {
  

  return (
    <> 
      <Navbar />
      {/* <Hero /> */}
      {/* <Aboutme /> */}
      {/* <Skills /> */}
      {/* <Work/> */}
      {/* <Contactform /> */}
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default RootLayout;
