import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  const handleBodyScroll = (event) => {
    if (nav) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    if (nav) {
      document.body.addEventListener('scroll', handleBodyScroll, { passive: false });
    } else {
      document.body.removeEventListener('scroll', handleBodyScroll);
    }

    return () => {
      document.body.removeEventListener('scroll', handleBodyScroll);
    };
  }, [nav]);

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className='bg-black h-[100px] text-gray-200 max-w-[100%] mx-auto flex justify-between items-center'>
      <h1 className='text-3xl primary-color font-bold ml-4'>Bilal Haider</h1>
      <ul className='opacity-0 md:opacity-100 md:flex mr-10 gap-5 '>
        <li className='p-2 font-bold hover:text-red-500/80'>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className='p-2 font-bold hover:text-red-500/80'>
          <NavLink to="about">About</NavLink>
        </li>
        <li className='p-2 font-bold hover:text-red-500/80'>
          <NavLink to="work">Work</NavLink>
        </li>
        <li className='p-2 font-bold hover:text-red-500/80'>
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden mr-4'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? 'fixed h-screen overflow-auto left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500 z-10'
            : 'transition-all duration-500 ease-in-out fixed left-[-100%]'
        }
      >
        <h1 className='text-3xl primary-color m-4'>Bilal Haider</h1>
        <ul className='p-8 text-2xl'>
          <li className='p-2 hover:text-red-500/80'>
            <NavLink to="/" onClick={closeNav}>Home</NavLink>
          </li>
          <li className='p-2 hover:text-red-500/80'>
            <NavLink to="about" onClick={closeNav}>About</NavLink>
          </li>
          <li className='p-2 hover:text-red-500/80'>
          <NavLink to="work" onClick={closeNav}>Work</NavLink>
          </li>
          <li className='p-2 hover:text-red-500/80'>
          <NavLink to="contact" onClick={closeNav}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
