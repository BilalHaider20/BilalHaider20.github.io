import { useState } from 'react'

import './App.css'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import Aboutme from './components/About'
// import Skills from './components/Skills'
// import Contactform from './components/contactform'
// import Work from './components/Work'
// import Footer from './components/footer'
import RootLayout from './RootLayout/RootLayout'
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from 'react-router-dom'
import Root from './Pages/Root'
import AboutMe from './Pages/About'
import Work from './Pages/Work'
import Contactform from './Pages/contactform'
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add(".show");
//       }
//       else {
//         entry.target.classList.remove(".show");
//       }
//     });
//   }
// );
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Root />} />
      <Route path='about' element={<AboutMe />} />
      <Route path='work' element={<Work/>} />
      <Route path='contact' element={<Contactform/>} />
    </Route>
  )
);
function App() {
  
  // const hiddenElements = document.querySelectorAll('.hidden');
  // hiddenElements.forEach(
  //   (el) => observer.observe(el)
  // );
  return (
    <> 
      {/* <Navbar />
      <Hero />
      <Aboutme />
      <Skills />
      <Work/>
      <Contactform />
      <Footer/> */}
      {/* <Root/> */}
      <RouterProvider router={router}/>
    </>
  )
}

export default App
