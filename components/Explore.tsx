import React from 'react'
import LargeCard from './LargeCard'
import MediumCard from './MediumCard'
import SimpleCard from './SimpleCard'

const Explore = () => {
  return (
    <div>
      <main className='max-w-7xl mx-auto px8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5' >Explore Nearby </h2>
          <SimpleCard />
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8' >Live AnyWhere </h2>
          <MediumCard />

        </section>

        <section>
          <LargeCard/>
        </section>
      </main>
    </div>

  )
}

export default Explore
