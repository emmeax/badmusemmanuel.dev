import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 z-30 relative'>
    <div className='container py-2 flex justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Emmanuel</div>
        <div className='space-x-6'>
            <a href="#home" className='hover:text-gray-400'>Home</a>
            <a href="#about" className='hover:text-gray-400'>About Me</a>
            <a href="#service" className='hover:text-gray-400'>Service</a>
            <a href="#project" className='hover:text-gray-400'>Project</a>
            <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
    </div>
</nav>
  )
}

export default Navbar