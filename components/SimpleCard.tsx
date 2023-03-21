import Image from 'next/legacy/image'
import React from 'react'

const SimpleCard = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2
                            lg:grid-cols-3 xl:grid-cols-4 ">
                <div className='flex items-center m-2 mt-5 
                                space-x-4 rounded-xl cursor-pointer
                                hover:bg-gray-100 hover:scale-105
                                transition transform duration-200 ease-out '>

                    <div className='relative h-16 w-16'>
                        <Image src='/Images/london.jpeg ' layout='fill'
                            className='rounded-lg'
                        />
                    </div>

                    <div>
                        <h2>London</h2>
                        <h3 className='text-gray-500'>45-Minute drive</h3>

                    </div>
                </div>


                <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl
                                cursor-pointer hover:bg-gray-100 hover:scale-105
                                transition transform duration-200 ease-out '>

                    <div className='relative h-16 w-16'>
                        <Image src='/Images/liverpool.jpg' layout='fill'
                            className='rounded-lg'
                        />
                    </div>

                    <div>
                        <h2>LiverPool</h2>
                        <h3 className='text-gray-500'>45-Minute drive</h3>

                    </div>
                </div>


                <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl
                                cursor-pointer hover:bg-gray-100 hover:scale-105
                                transition transform duration-200 ease-out '>

                    <div className='relative h-16 w-16'>
                        <Image src='/Images/manchester.jpeg' layout='fill'
                            className='rounded-lg'
                        />
                    </div>

                    <div>
                        <h2>Manchester</h2>
                        <h3 className='text-gray-500'>45-Minute drive</h3>

                    </div>
                </div>


                <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl
                                cursor-pointer hover:bg-gray-100 hover:scale-105
                                transition transform duration-200 ease-out '>

                    <div className='relative h-16 w-16'>
                        <Image src='/Images/Birmingham.jpeg ' layout='fill'
                            className='rounded-lg'
                        />
                    </div>

                    <div>
                        <h2>Birmingham</h2>
                        <h3 className='text-gray-500'>45-Minute drive</h3>

                    </div>
                </div>


                <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl
                                cursor-pointer hover:bg-gray-100 hover:scale-10
                                transition transform duration-200 ease-out '>

                    <div className='relative h-16 w-16'>
                        <Image src='/Images/Edinburgh.jpeg' layout='fill'
                            className='rounded-lg'
                        />
                    </div>

                    <div>
                        <h2>Edinburgh</h2>
                        <h3 className='text-gray-500'>45-Minute drive</h3>

                    </div>
                </div>


                <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl
                                cursor-pointer hover:bg-gray-100 hover:scale-105
                                transition transfor duration-200 ease-out '>

                    <div className='relative h-16 w-16'>
                        <Image src='/Images/new-york.jpeg ' layout='fill'
                            className='rounded-lg'
                        />
                    </div>

                    <div>
                        <h2>New York</h2>
                        <h3 className='text-gray-500'>45-Minute drive</h3>


                    </div>
                </div>


                <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl
                                cursor-pointer hover:bg-gray-100 hover:scale-105
                                transition transform duration-200 ease-out '>

                    <div className='relative h-16 w-16'>
                        <Image src='/Images/hove.jpeg ' layout='fill'
                            className='rounded-lg'
                        />
                    </div>

                    <div>
                        <h2>Hove</h2>
                        <h3 className='text-gray-500'>45-Minute drive</h3>


                    </div>
                </div>


                <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl
                                cursor-pointer hover:bg-gray-100 hover:scale-105
                                transition transform duration-200 ease-out '>

                    <div className='relative h-16 w-16'>
                        <Image src='/Images/newquay.jpeg ' layout='fill'
                            className='rounded-lg'
                        />
                    </div>

                    <div>
                        <h2>NewQuay</h2>
                        <h3 className='text-gray-500'>45-Minute drive</h3>


                    </div>
                </div>
            </div>


        </>
    )
}

export default SimpleCard
