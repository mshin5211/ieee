"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Modal from './Modal'
import { useState } from 'react'
import { ThemeProvider } from './theme-provider';

const Hero = () => {

    const [showModal, setShowModal] = React.useState(false);
   
  return (
    <header id='heroImg' className='w-screen h-screen max-h-[800px] dark:bg-[url("../images/quadDark.jpg")] bg-[url("../images/quad.jpg")] md:bg-cover flex items-center justify-center'>
        <div className='opacity-0 md:opacity-100'>
            <Spotlight className="-top-40 -left-10 
            md:-left-32 md:-top-20 h-screen" fill="white" />
            <Spotlight className="-top-10 -left-full h-[80vh] w-[50vw]"
             fill="purple" />
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" 
            fill="blue" />
        </div>
       
        <div className="flex justify-center relative my-60 z-10">
            <div className="max-w-[80vw] md:max-w-2xl lg:max-w-[70vw] xl:max-w-[80vw] flex flex-col
            items-center justify-center flex-wrap gap-y-4">
                <h2 className='uppercase tracking-widest text-xs 
                text-center text-blue-100 max-w-80'>
                    Write something here
                </h2>
                <TextGenerateEffect 
                    className='text-center text-[40px] md:text-5xl xl:text-6xl '
                    words='IEEE at the University of Illinois'>
                </TextGenerateEffect>
                
                <p className="text-center md:tracking-wider mb-4 text-sm 
                md:text-lg lg:text-2xl text-orange-100">
                    Join us for tech talks, info sessions, luncheons, workshops, and socials
                </p>
                <div className='flex flex-col md:flex-row justify-center items-center gap-3'>
                    <a href='#overview'>
                        <button className="bg-[#FF5F0F] border border-white/[0.2] focus:ring-1 ring-white bg-opacity-50 backdrop-blur-sm hover:bg-opacity-100 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-md">
                            Learn More
                        </button>
                    </a>
                    <a>
                        <button onClick={() => setShowModal(true)}className="bg-[#0455A4] focus:ring-1 ring-white border border-white/[0.7] bg-opacity-80 backdrop-blur-sm hover:bg-blue-500 hover:bg-opacity-100 text-white font-bold py-2 px-4 rounded-md">
                            Join Us
                        </button>
                    </a>
                </div>
                {showModal && <Modal handleClick={() => setShowModal(false)}/>}
            </div>
        </div>
  
     
    </header>
  )
}

export default Hero;