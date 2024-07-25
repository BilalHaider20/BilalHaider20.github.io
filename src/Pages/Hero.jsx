import React from 'react'
import profileimage from '../assets/bilal.jpg'
import { TypeAnimation } from 'react-type-animation'
import Resume from '../assets/Bilal Haider Resume.pdf'

function Hero() {
  return (
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[100vw] h-[400px] md:h-[500px] mx-auto bg-black'>
          <div className='col-span-1 mx-auto my-auto w-[200px] lg:w-[300px]'>
              
            <img src={profileimage} alt="Profile Image"/>
              
          </div>
          <div className='col-span-2 px-5'> 
              <h1 className='text-white text-4xl sm:text-5xl lg:text-6xl font-bold mt-12'>
                  <span className='primary-color'>I'm a</span><br />
                  <TypeAnimation sequence={
                      ["Full Stack Dev", 1000,
                          "Web Dev", 1000,
                      ]
                   }
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                  /> 
              </h1>
              {/* <div className='text-white my-16'>
                  <a href={Resume} download="Bilal Haider Resume" className='w-full rounded-xl bg-gradient-to-br from-orange-400 to-pink-600
                 px-6 py-3 mr-4'>Download Resume</a> 
                  <a href="mailto:haiderbilal306@gmail.com" className='w-full rounded-xl bg-gradient-to-br from-gray-600 to-gray-800
                 border-[1.5px] border-l-white
                 px-6 py-3 mr-4'>Contact</a> 
              </div> */}
              <ul className="flex text-4xl md:text-5xl w-[50%] gap-5 justify-start my-10 lg:mt-16">
          <li className="bg-primary-color rounded-md hover:scale-110 transition-scale duration-300 ease-in-out
        ">
              <a href="https://github.com/BilalHaider20" target="_blank" rel="noreferrer" >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z">
                  </path>
                </svg>
              </a>
            </li>
            <li className=" bg-primary-color rounded-md hover:scale-110 transition-scale duration-300 ease-in-out">
              <a href="https://www.linkedin.com/in/thebilalhaider" target="_blank" rel="noreferrer" >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></a>
          </li>
            <li className=" bg-primary-color rounded-md hover:scale-110 transition-scale duration-300 ease-in-out">
            <a href="mailto:haiderbilal306@gmail.com" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50" height="1em" width="1em">
              <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
            </svg>
            </a>
            </li>       

        </ul>    
          </div>
    </div>
  )
}

export default Hero