import React from 'react'
import SubHero from '@/components/SubHero'
import { administration_data } from '@/_lib/data'
import LeadershipCard from '@/components/leadershipCard'

const Leadership = () => {
  return (
    <div className='relative flex justify-center items-center
    flex-col mx-auto sm:px-10 px-5 overflow-clip gap-y-5 dark:bg-dark'>
      <SubHero title='Leadership' />
      
  
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <p className='text-gray-700'>Henry Petroski</p>
      <div className='flex flex-col w-[70%] justify-center items-center'>
        
        <h1 className='font-bold text-dark drop-shadow-md text-xl text-center'>As engineers, we were going to be in a position to change the world &minus; not just study it.</h1>
        
      </div>
<div className="inline-flex items-center justify-center w-full">
    <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"></hr>
    <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
        <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
  </svg>
    </div>
</div>
<div className='flex w-[70%] justify-center items-center'>
        <h1 className='font-bold text-dark drop-shadow-md text-xl text-center'>Driving innovation and leadership in IEEE at the University of Illinois.<br></br>Our officers are here to guide and inspire.</h1>
      </div>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>


      <div>
        <h1 className='mt-10 text-2xl md:text-3xl font-bold text-center'>Our Leadership</h1>
      </div>
      <section className='my-10 flex flex-col flex-wrap md:flex-row justify-center gap-y-10 items-center w-[80%] max-md:w-[90%] rounded-2xl p-10 mx-auto shadow-lg shadow-dark'>
        {administration_data.map((administration) => (
          <LeadershipCard key={administration.id} name={administration.name} description={administration.description} role={administration.role} src={administration.src} href={administration.href} />
        ))}
      </section>


    </div>
  )
}

export default Leadership