import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
function Skills() {
  
    
      const skills = [
        { name: 'HTML & CSS' , icon: <FaCheckCircle className="h-6 w-6" /> },
        { name: 'Javascript', icon: <FaCheckCircle className="h-6 w-6" /> },
        { name: 'React', icon: <FaCheckCircle className="h-6 w-6" /> }, 
        { name: 'React Native', icon: <FaCheckCircle className="h-6 w-6" /> },
        { name: 'Tailwind CSS', icon: <FaCheckCircle className="h-6 w-6" /> },
        { name: 'Redux', icon: <FaCheckCircle className="h-6 w-6" /> },
        // { name: 'WindowsForm C#', icon: <FaCheckCircle className="h-6 w-6" /> },
       
      ];
    
      return (
        <section className="text-white w-full py-12 md:py-24 lg:py-20 ">
          <div className=" px-4 md:px-6">
            <div className=' mx-auto' >
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold sm:text-5xl primary-color py-4">My Skills</h2>
                <p className="p-5 mx-auto max-w-[800px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  I'm experienced in a variety of programming languages and frameworks. Here are a few of my top skills.
                </p>
              </div>
    
              <div className="grid max-w-3xl gap-4 min-[400px]:grid-cols-2 lg:gap-2 md:max-w-[80%]  mx-auto">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center space-x-2 p-3">
                    {skill.icon && skill.icon} 
                    <h3 className="text-lg font-bold">{skill.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      );
    
}

export default Skills