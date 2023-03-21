// import Image from 'next/image'
import React from 'react'
import Image from 'next/legacy/image'
// import { SearchIcon } from "@heroicons/vue/solid"
// import styles from '//page/module.css'
import { BiSearch } from '@react-icons/all-files/bi/BiSearch'
import { AiOutlineGlobal } from '@react-icons/all-files/ai/AiOutlineGlobal'
import { AiOutlineMenu } from '@react-icons/all-files/ai/AiOutlineMenu'
import { FaUserCircle } from '@react-icons/all-files/fa/FaUserCircle'

function Header() {
  return (
    <header className='sticky top-0 z-50
    grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>



      {/* left side */}


      <div className="relative flex items-center h-10 my-auto cursor-pointer">
        <Image src='/Images/logo.png'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>



      {/* middle side */}


      <div className='flex items-center md:border-2 rounded-full  py-2 md:shadow-sm'>
        <input className='flex-grow pl-5 bg-transparent outline-none text-sm
        text-gray-600 placeholder-gray-400  '
          type="text" placeholder='Start Your Search' />

        <BiSearch className="hidden md:inline-flex 
        h-8 bg-red-400 text-white
        rounded-full p-5 cursor-pointer md:mx-2
        "/>

      </div>



      {/* right side  */}



      <div className='flex items-center space-x-4
      justify-end text-gray-500 '>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <AiOutlineGlobal className='h-8 cursor-pointer' />

        <div className='flex items-center space-x-4 p-2 border-2 rounded-full'>
          <AiOutlineMenu className='h-8' />
          <FaUserCircle className='h-8' />
        </div>
      </div>
    </header>
  )
}

export default Header
