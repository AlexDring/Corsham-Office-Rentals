import React, { useState } from 'react';
import { useContact } from '../hooks/useContact';

export default function Contact() {
  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [tel, setTel] = useState('');
  const [message, setMessage] = useState('');
  const { email, phone } = useContact();

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ name, emailAddress, tel, message });
  }

  return (
    <section className="bg-white pb-24 pt-12">
      <div className="mx-auto">
        <div className="flex flex-wrap bg-white lg:px-12 px-6 mx-auto">
          <div className="w-full md:w-1/2 bg-gray-100 lg:p-12 p-8 rounded-l-lg">
            <h1 className="text-3xl mb-6 font-extrabold">Get in touch</h1>
            <h2 className="font-semibold text-gray-900 text-xs">PHONE</h2>
            <a
              className="text-red-700 font-semibold md:text-xl"
              href={`tel:${phone}`}
            >
              {phone}
            </a>
            <h2 className="font-semibold text-gray-900 text-xs mt-4">EMAIL</h2>
            <a
              className="text-red-700 font-semibold md:text-xl break-words"
              href={`mailto:${email}?subject=Corsham%20Office%20Rental%20Enquiry`}
            >
              {email}
            </a>
            <h2 className="font-semibold text-gray-900 text-xs mt-4">
              ADDRESS
            </h2>

            <address className="mt-1 text-gray-700 text-md not-italic">
              Unit 23 <br />
              Leafield Industrial Estate <br />
              Corsham <br />
              Wiltshire <br />
              SN13 9RS
            </address>
          </div>
          <div className="w-full md:w-1/2 p-12 rounded-r-lg bg-gray-50">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">
                  Full Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="name"
                  name="name"
                  value={name}
                  id="name"
                  placeholder="Full Name"
                  className="w-100 mt-3 py-3 px-3 rounded-md bg-white border border-gray-300  text-gray-800 text-sm focus:border-red-600 focus:outline-none"
                />
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">
                  Email
                </label>
                <input
                  onChange={(e) => setEmailAddress(e.target.value)}
                  type="email"
                  name="email"
                  value={emailAddress}
                  id="email"
                  placeholder="Email"
                  className="w-100 mt-3 py-3 text-sm px-3 rounded-md bg-white border border-gray-300  text-gray-800  focus:border-red-600 focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col mt-2">
                <label htmlFor="tel" className="hidden">
                  Number
                </label>
                <input
                  onChange={(e) => setTel(e.target.value)}
                  type="tel"
                  name="tel"
                  value={tel}
                  id="tel"
                  placeholder="Telephone Number"
                  className="w-100 mt-3 py-3 text-sm px-3 rounded-md bg-white border border-gray-300  text-gray-800  focus:border-red-600 focus:outline-none"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="message" className="hidden">
                  Message
                </label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  type="message"
                  name="message"
                  value={message}
                  id="message"
                  placeholder="Enter message"
                  className="h-24 w-100 mt-3 py-3 text-sm px-3 rounded-md bg-white border border-gray-300  text-gray-800  focus:border-red-600 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="md:w-32 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md mt-4 transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
