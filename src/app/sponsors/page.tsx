import React from 'react'
import SubHero from '@/components/SubHero'
import SponsorCard from '@/components/sponsorCard'
import { sponsorshipData } from '@/_lib/data'

export const metadata = {
  title: "Sponsors"
}

const Sponsors = () => {
  return (
    <div className='relative flex justify-center items-center
    flex-col mx-auto sm:px-10 px-5 overflow-clip gap-y-5 dark:bg-dark'>
      <SubHero title='Sponsors' />
      <div className='relative flex justify-center items-center flex-col'>
        <h1 className='mt-10 text-lg md:text-3xl font-bold text-center'>Our Sponsors 2023-2024</h1>
        <p className='mt-5 text-sm md:text-md text-center mb-10 text-wrap'>For sponsorship inquiries, please contact us at <a href='mailto:ieee.uiuc@gmail.com' className='text-blue-500'> ieee.uiuc@gmail.com</a></p>
          <div className='flex flex-col justify-center items-center gap-5 md:flex-row w-[80vw] lg:w-[60vw] flex-wrap mb-10'>
            {sponsorshipData.map(({id, title, src, link}) => (
              <SponsorCard key={id} title={title} src={src} link={link} />
            ))}
          </div>
        
      </div>
    </div>
  )
}

export default Sponsors