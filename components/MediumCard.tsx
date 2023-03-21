import Image from 'next/legacy/image'
import React from 'react'

const MediumCard = () => {
    return (
        <div className='flex space-x-3 overflow-scroll scrollbar-hide
                        p-3 -m-3 '>

            <div className='cursor-pointer
                            hover:scale-105 transition transform duration-300'>
                <div className='relative h-80 w-80 '>
                    <Image src='/Images/live2.jpg' layout='fill' className='rounded-xl' />
                </div>
                <h3 className='text-2xl mt-3' >Snow Place Home</h3>
            </div>

            <div className='cursor-pointer
                            hover:scale-105 transition transform duration-300'>
                <div className='relative h-80 w-80 '>
                    <Image src='/Images/live4.jpg' layout='fill' className='rounded-xl' />
                </div>
                <h3 className='text-2xl mt-3' >Outdoor Getways</h3>
            </div>

            <div className='cursor-pointer
                            hover:scale-105 transition transform duration-300'>
                <div className='relative h-80 w-80 '>
                    <Image src='/Images/live3.jpg' layout='fill' className='rounded-xl' />
                </div>
                <h3 className='text-2xl mt-3' >Unique Stays</h3>
            </div>

            <div className='cursor-pointer
                            hover:scale-105 transition transform duration-300'>
                <div className='relative h-80 w-80 '>
                    <Image src='/Images/live5.jpeg' layout='fill' className='rounded-xl' />
                </div>
                <h3 className='text-2xl mt-3' >Entire Home</h3>
            </div>

        </div>
    )
}

export default MediumCard
