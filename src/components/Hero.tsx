import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Hero = () => {
  return (
    <header>
        <div className='opacity-0 md:opacity-100'>
            <Spotlight className="-top-40 -left-10 
            md:-left-32 md:-top-20 h-screen" fill="white" />
            <Spotlight className="-top-10 -left-full h-[80vh] w-[50vw]"
             fill="purple" />
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" 
            fill="blue" />
        </div>
        <div id='heroImg' className='w-full h-screen dark:brightness-50 brightness-90 bg-[url("../images/quad.jpg")] md:bg-cover flex items-center justify-center absolute top-0 left-0'>
        </div>

        <div className="flex justify-center relative my-64 z-10">
            <div className="max-w-[80vw] md:max-w-2xl lg:max-w-[80vw] flex flex-col
            items-center justify-center flex-wrap">
                <h2 className='uppercase tracking-widest text-xs 
                text-center text-blue-100 max-w-80'>
                    Write something here
                </h2>
                <TextGenerateEffect 
                    className='text-center text-[40px] md:text-5xl lg:text-6xl '
                    words='IEEE at the University of Illinois'>
                </TextGenerateEffect>
                
                <p className="text-center md:tracking-wider mb-4 text-sm 
                md:text-lg lg:text-2xl text-orange-100">
                    Join us for tech talks, info sessions, luncheons, workshops, and socials!
                </p>
                
                
            </div>
        </div>
  
     
    </header>
  )
}

export default Hero;