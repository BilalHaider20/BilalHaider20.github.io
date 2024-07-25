import { useState } from 'react';

import Hero from '../Pages/Hero';
import Aboutme from '../Pages/About';
import Skills from '../Pages/Skills'
import Work from '../Pages/Work'
import Contactform from '../Pages/contactform'

function Root() {
  

  return (
    <> 
      <Hero />
      <Aboutme />
      <Skills />
      <Work/>
      <Contactform />
    </>
  )
}

export default Root;
