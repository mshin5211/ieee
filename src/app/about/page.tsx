import React from 'react'
import Mission from "@/components/Mission";
import Overview from "@/components/Overview";
import Branch from "@/components/Branch";
import SubHero from '@/components/SubHero';

export const metadata = {
  title: "About"
}

const About = () => {
  return (
    <div className='relative flex justify-center items-center
    flex-col mx-auto sm:px-10 px-5 overflow-clip gap-y-5 dark:bg-dark'>
      <SubHero title='About Us' />
      <Overview />
      <Branch />
      <Mission />
    </div>
  )
}

export default About