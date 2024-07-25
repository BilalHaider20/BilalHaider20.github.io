import React from 'react';
import contactimage from '../assets/contactformimage.jpeg';

function Contactform() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 bg-black">
      <div className="grid items-center justify-items-center md:grid-cols-2 my-10">
        <div className="flex items-center justify-center ">
          <div className="px-2 md:px-8 sm:w-[100%] ">
            <p className='text-4xl text-center mb-3 font-bold primary-color'>Get in touch</p>
            <form action="https://getform.io/f/kazR7qaJ" className="mt-8 space-y-4 w-[350px] text-white" method='POST'>
              <div className="grid w-full gap-y-4 md:gap-x-4 md:grid-cols-2">
                <div className="grid w-full  items-center gap-1.5">
                  <label className="text-sm font-medium leading-none text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="first_name">First Name</label>
                  <input className="flex h-10 w-full rounded-md border focus:border-pink-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none   disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-pink-600 dark:focus:ring-offset-gray-900" id="first_name" placeholder="First Name" type="text" name="FirstName" required />
                </div>
                <div className="grid w-full  items-center gap-1.5">
                  <label className="text-sm font-medium leading-none text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="last_name">Last Name</label>
                  <input className="flex h-10 w-full rounded-md border focus:border-pink-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none  focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-pink-600 dark:focus:ring-offset-gray-900" id="last_name" placeholder="Last Name" type="text" name="LastName" required />
                </div>
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <label className="text-sm font-medium leading-none text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">Email</label>
                <input name="email" className="flex h-10 w-full rounded-md border focus:border-pink-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none  focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-pink-600 dark:focus:ring-offset-gray-900" id="email" placeholder="Email" type="email" required />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <label className="text-sm font-medium leading-none text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="phone_number">Phone number</label>
                <input className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none   focus:border-pink-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-offset-gray-900" id="phone_number" placeholder="Phone number" type="tel" name="PhoneNumber" />
              </div>
              <div className="grid w-full  items-center gap-1.5">
                <label className="text-sm font-medium leading-none text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="message">Message</label>
                <textarea className="flex h-10 w-full rounded-md border focus:border-pink-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none  focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-pink-600 dark:focus:ring-offset-gray-900" id="message" placeholder="Leave a message" cols="3" name='Message' required></textarea>
              </div>
              <button type="submit" className="w-full rounded-md bg-primary-color px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Send Message</button>
            </form>
          </div>
        </div>
        <img src={contactimage} alt="Contact us" className=" h-[400px] w-[80%] rounded-lg object-cover max-[768px]:hidden md:block " />
      </div>
    </div>
  );
}

export default Contactform;
