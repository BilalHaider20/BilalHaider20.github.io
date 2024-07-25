import React from 'react';
import proj1 from '../assets/PasswordGenerator.png'
import proj2 from '../assets/SnakeLadder.png'
import proj3 from '../assets/CurrencyConverter.png';
import proj4 from '../assets/Portfolio.jpg';

function Work() {
  const projects = [
    {
      title: 'Currency Converter',
      image:proj3,
      description: ' Developed a currency conversion application provides up-to-date conversion rates',
      github: 'https://github.com/BilalHaider20/CurrencyConverter',
      link:'https://convertingcurrency.netlify.app/'
    },
    {
      title: 'Password Generator',
      image:proj1,
      description: 'Random Password Generator with customizable options upto 30 characters length, with number and character inclusion',
      github: 'https://github.com/BilalHaider20/Password-Generator/',
      link:'https://buildpassword.netlify.app/'
    },
    {
      title: 'Snake Ladder Game',
      image:proj2,
      description: 'Fully Functional Snake and Ladder Game with dynamic layout provides seamless gameplay across all devices',
      github: 'https://github.com/BilalHaider20/SnakeLadderGame.github.io/',
      link:'https://snake-and-laddergame.netlify.app/'
    },
    
    {
      title: 'Portfolio',
      image: proj4,
      description:'It is a responsive website made with HTML ,CSS and Javascript',
      github:'https://github.com/BilalHaider20/Portfolio-website',
      link: 'https://bilalhaider20.github.io/portfolio/'
    }
    
  ];

  return (
    <div className='max-w-[1200px] mx-auto p-5 bg-black '>
      <div className='pb-8 py-5'>
        <p className='text-3xl text-center mb-3 font-bold primary-color mt-10 sm:text-5xl'>Work</p>
        <p className='text-gray-400 text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>Check out some of my projects</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 py-5 px-5  md:w-[100%] mx-auto'>
        {projects.map((project) => (
          <div key={project.title} className='transform, transition-all duration-300 hover:scale-105 overflow-hidden  shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover relative'>
            <img src={project.image} layout="fill" objectfit="cover" alt="" className='opacity-50' />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-3 left-4 text-left ">
              <h1 className="text-lg font-semibold text-white">{ project.title}</h1>
        <p className="mt-2 text-sm text-gray-300">
          {project.description}
        </p>
        <div className='flex flex-row gap-10 mt-2'>
        <a className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white " href={project.github} target='_blank'>
          Github &rarr;
                </a>
          { project.link &&
                  <a className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" href={project.link} target='_blank'>
                    View &rarr;
          </a>}
             
        </div>
        
      </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// function Work()
// {
//   const projects = [
//         {
//           title: 'Natour Project',
//           image: proj1,
//           link: 'https://bilalhaider20.github.io/Natour-Website/',
//         },
//         {
//           title: 'Portfolio',
//           image: proj2,
//           link: 'https://bilalhaider20.github.io/portfolio/',
//         },
//         // Add additional projects here in the same format
//   ];
//   return (
//     <div className='max-w-[1200px] mx-auto p-5 bg-black '>
//       <div className='pb-8 py-5'>
//         <p className='text-3xl text-center mb-3 font-bold primary-color mt-10 sm:text-5xl'>Work</p>
//         <p className='text-gray-400 text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>Check out some of my projects</p>
//       </div>
//     <div className="relative h-[300px] sm:w-[300px] w-[100%] rounded-md">
//       <img
//         src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
//         alt="AirMax Pro"
//         className="z-0 h-full w-full rounded-md object-cover opacity-50"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
//       <div className="absolute bottom-8 left-4 text-left">
//         <h1 className="text-lg font-semibold text-white">Delba</h1>
//         <p className="mt-2 text-sm text-gray-300">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
//         </p>
//         <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
//           View Profile &rarr;
//         </button>
//       </div>
//       </div>
//     </div>
//   )
  
// }
export default Work;
// transform transition-transform  hover:translate-x-full