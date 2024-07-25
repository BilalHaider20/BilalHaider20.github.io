import React, { useState, useEffect } from 'react';
import './AboutMe.css'; // Import CSS file for styling

function AboutMe() {
  const [isIntroVisible, setIsIntroVisible] = useState(false);
  const [isEducationVisible, setIsEducationVisible] = useState(false);
  const [isTechVisible, setIsTechVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about-me');
      const sectionTop = section.offsetTop;
      const windowBottom = window.scrollY + window.innerHeight;

      if (windowBottom > sectionTop) {
        setIsIntroVisible(true);
        setTimeout(() => {
          setIsEducationVisible(true);
        }, 1000);
        setTimeout(() => {
          setIsTechVisible(true);
        }, 2000);
      }
      else {
        // Reset visibility flags when scrolling away from the section
        setIsIntroVisible(false);
        setIsEducationVisible(false);
        setIsTechVisible(false);
      }
        
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about-me" className="container mx-auto px-4 py-14 flex flex-col items-center">
      <h2 className="text-3xl sm:text-5xl primary-color font-bold mb-10">About Me</h2>
      <div className="content-wrapper">
        <div className={`intro ${isIntroVisible ? 'fade-in' : ''} max-w-[80%] mx-auto p-5 mb-8`}>
          
          <p className="text-lg text-gray-300">
            I'm a passionate developer with a strong desire to create
            innovative and user-friendly experiences. I'm constantly learning and
            growing, eager to tackle new challenges and contribute my skills to
            meaningful projects.
          </p>
        </div>
        <div className={`education ${isEducationVisible ? 'fade-in' : ''} opacity-0 max-w-[80%] mx-auto p-5 mb-8`}>
          
          <h3 className="text-2xl font-bold mb-4 text-white">Education</h3>
          <ul className="list-none space-y-2">
            <li>
              <h4 className="text-xl font-medium text-gray-400">Bachelor of Computer Science</h4>
              <p className="text-gray-400">Government College University Lahore</p>
            </li>
          </ul>
        </div>
        <div className={`technical-knowledge ${isTechVisible ? 'fade-in' : ''} opacity-0 max-w-[80%] mx-auto p-5 mb-8`}>
          {/* Add bottom margin here */}
          <h3 className="text-2xl font-bold mb-4 text-white">Technical Knowledge</h3>
          <ul className="list-none space-y-2">
            <li>
              <p className="text-gray-400">Programming Courses: Object Oriented Programming, Data Structure and Algorithms</p>
            </li>
            <li>
              <p className="text-gray-400">Programming Languages: C++, Java, JavaScript</p>
            </li>
            <li>
              <p className="text-gray-400">Frontend Frameworks: React</p>
            </li>
            <li>
              <p className="text-gray-400">Databases: SQL Server</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;

