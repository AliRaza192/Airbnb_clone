import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-200 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>It's a pretty awesome clone</p>
            <p>This is not a real site</p>
            <p>Referrals accpeted</p>
            <p>Razafam</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>Ali Raza</p>
            <p>Presents</p>
            <p>PIAIC</p>
            <p>Sir Zia Khan</p>
            <p>Join now </p>
        </div>


        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help center</p>
            <p>Trust & Sefety</p>
            <p>Say Hi Youtube</p>
            <p>Easter Eggs</p>
            <p>For Win</p>
        </div>

    </div>
  )
}

export default Footer
