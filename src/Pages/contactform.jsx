import React, { useState } from 'react';
import contactimage from '../assets/contactformimage.jpeg';

function Contactform() {
  const [formValues, setFormValues] = useState({
    FirstName: '',
    LastName: '',
    email: '',
    PhoneNumber: '',
    Message: ''
  });
  const [isSubmitted, setisSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a form data object
    const formData = new FormData(event.target);

    // Send form data using fetch API
    fetch('https://getform.io/f/kazR7qaJ', {
      method: 'POST',
      body: formData
    }).then(response => {
      if (response.ok) {
        // Clear input fields after successful submission
        setisSubmitted(true);
        setFormValues({
          FirstName: '',
          LastName: '',
          email: '',
          PhoneNumber: '',
          Message: ''
        });
      }
    }).catch(error => {
      Alert('Error submitting the form', error);
      setisSubmitted(false);
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 bg-black">
      <div className="grid items-center justify-items-center md:grid-cols-2 my-10">
        <div className="flex items-center justify-center">
          <div className="px-2 md:px-8 sm:w-[100%]">
            <p className='text-4xl text-center mb-3 font-bold primary-color'>Get in touch</p>
            <form className="mt-8 space-y-4 w-[350px] text-white" method='POST' onSubmit={handleSubmit}>
              <div className="grid w-full gap-y-4 md:gap-x-4 md:grid-cols-2">
                <div className="grid w-full items-center gap-1.5">
                  <label className="text-sm font-medium leading-none text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="FirstName">First Name</label>
                  <input
                    className="flex h-10 w-full rounded-md border focus:border-pink-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-pink-600 dark:focus:ring-offset-gray-900"
                    id="FirstName"
                    placeholder="First Name"
                    type="text"
                    name="FirstName"
                    required
                    value={formValues.FirstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <label className="text-sm font-medium leading-none text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="LastName">Last Name</label>
                  <input
                    className="flex h-10 w-full rounded-md border focus:border-pink-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-pink-600 dark:focus:ring-offset-gray-900"
                    id="LastName"
                    placeholder="Last Name"
                    type="text"
                    name="LastName"
                    required
                    value={formValues.LastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid w-full items-center gap-1.5">
                <label className="text-sm font-medium leading-none text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">Email</label>
                <input
                  name="email"
                  className="flex h-10 w-full rounded-md border focus:border-pink-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-pink-600 dark:focus:ring-offset-gray-900"
                  id="email"
                  placeholder="Email"
                  type="email"
                  required
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <label className="text-sm font-medium leading-none text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="PhoneNumber">Phone number</label>
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:border-pink-600 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-offset-gray-900"
                  id="PhoneNumber"
                  placeholder="Phone number"
                  type="tel"
                  name="PhoneNumber"
                  value={formValues.PhoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <label className="text-sm font-medium leading-none text-gray-500 peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="Message">Message</label>
                <textarea
                  className="flex h-10 w-full rounded-md border focus:border-pink-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-pink-600 dark:focus:ring-offset-gray-900"
                  id="Message"
                  placeholder="Leave a Message"
                  cols="3"
                  name='Message'
                  required
                  value={formValues.Message}
                  onChange={handleChange}
                ></textarea>
              </div>
              {
                isSubmitted? 
              
              <div
                
                className="w-full rounded-md bg-primary-color px-3 py-2 text-sm text-center font-semibold text-white shadow-sm hover:bg-orange-400/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Response Submitted
              </div>:
              <button
                type="submit"
                className="w-full rounded-md bg-primary-color px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-400/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Send Message
              </button>
              }
            </form>
          </div>
        </div>
        <img
          src={contactimage}
          alt="Contact us"
          className="h-[400px] w-[80%] rounded-lg object-cover max-[768px]:hidden md:block"
        />
      </div>
    </div>
  );
}

export default Contactform;
