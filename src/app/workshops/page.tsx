
import { workshopData } from '@/_lib/data'
import ProjectCard from '@/components/ProjectCard'
import SubHero from '@/components/SubHero'
import React from 'react'

export const metadata = {
  title: "Workshops"
}


const Workshops = () => {
  return (
    <div className='relative flex justify-center items-center
    flex-col mx-auto sm:px-10 px-5 overflow-clip gap-y-5 dark:bg-dark'>
      <SubHero title='Workshops' />
      <div>
        <h1 className='mt-10 text-lg md:text-3xl font-bold text-center'>Workshops</h1>
      </div>
      
      {workshopData.map((workshop) => (
        <ProjectCard key={workshop.id} title={workshop.title} description={workshop.description} src={workshop.src} href={workshop.href} reverse={workshop.reverse} />
      ))}
      <div className='mt-10'></div>
    </div>
  )
}

export default Workshops