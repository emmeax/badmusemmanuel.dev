import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8' >
      <div className='container mx-auto px-8 md:px-16 lg:px-10'>
        <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
            <div className='flex-1 mb-4 md:mb-0'>
                <h3 className='text-2xl font-bold mb-2'>Emmanuel</h3>
                <p className='text-gray-400'>Am a frontend Developer base in Nigeria, specialized in web development</p>
            </div>
            {/* <div className='flex-1 w-full'>
                <form className='flex items-center justify-center'>
                    <input type="email" placeholder='Enter Email' className='w-full p-2 rounded-l-lg bg-gray-800 border bprder-gray-600 focus:outline-none focus:border-green-400'/>
                    <button type='submit'className='bg-gradient-to-r from-green-400 to-blue-500 ext-white px-4 py-2 rounded-r-lg'>Subscribe</button>
                </form>
            </div> */}
        </div>
        <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between item-center'>
            <p className='text-gray-400'>
                &copy; {new Date().getFullYear()} Emmanuel. All right reserved
            </p>

            <div className='flex space-x-4 md:my-0'>
                <a href="#" className='text-gray-400 hover:text-white'></a>
                <a href="#" className='text-gray-400 hover:text-white' ></a>
                <a href="#" className='text-gray-400 hover:text-white'></a>
            </div>
            <div className='flex space-x-4' >
                <a href="#" className='text-gray-400 hover:text-white'>
                    privacy
                </a>
                <a href="#" className='text-gray-400 hover:text-white' >
                    Terms of services
                </a>
            </div>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer