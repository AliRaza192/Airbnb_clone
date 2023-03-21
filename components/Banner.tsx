import Image from 'next/legacy/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px]
                    lg:h-[500px] xl:h-[600px] 2xl:h-[700px]  '>
      <Image src='/Images/Edinburgh.jpeg'
        layout='fill' objectFit='cover' />

      <div className='absolute top-1/2 w-full text-center' >
        <p className='text-sm sm:text-lg font-bold text-black '>Not Sure Where To Go? Perfect.  </p>

        <button className='text-purple-500 bg-white
                          py-4 px-10 shadow-md font-bold
                          rounded-full my-4 hover:shadow-xl
                          active:scale-90 transition duration-150' >I'm filexble </button>
      </div>
    </div>
  )
}

export default Banner
