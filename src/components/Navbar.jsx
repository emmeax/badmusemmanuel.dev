import React, { useState } from 'react'


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className='bg-black text-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 z-30 relative'>
    <div className='container py-2 flex justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Emmanuel</div>
        <div className='hidden lg:flex space-x-6'>
            <a href="#home" className='hover:text-gray-400'>Home</a>
            <a href="#about" className='hover:text-gray-400'>About Me</a>
            <a href="#service" className='hover:text-gray-400'>Service</a>
            <a href="#project" className='hover:text-gray-400'>Project</a>
            <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden lg:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
         <div className="lg:hidden z-10">
      <button
        className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
        onClick={() => setNavbar(!navbar)}
      >
        {navbar ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
    </div>
    <div
     className={`${
      navbar ? "flex" : "hidden"
    } flex-col bg-[#0A2640] lg:hidden absolute top-16 left-0 w-full py-6 px-8 space-y-6`}
    >
      <a href="#home" className="hover:text-gray-400">
        Home
      </a>
      <a href="#about" className="hover:text-gray-400">
        About
      </a>
      <a href="#services" className="hover:text-gray-400">
        Services
      </a>
      <a href="#projects" className="hover:text-gray-400">
        Projects
      </a>
      <a href="#contact" className="hover:text-gray-400">
        Contact
      </a>
      <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          onClick={() => setNavbar(false)}
        >
          Connect Me
        </button>
    </div>
    </div>

</nav>
  )
}

export default Navbar