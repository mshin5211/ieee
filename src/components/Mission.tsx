"use client";
import React, { useState } from 'react'
import Modal from './Modal'

const Mission = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
        <section className='text-slideIn grid grid-cols-1 md:grid-cols-1 justify-items-center content-center gap-5 my-10'>
            <div className='flex flex-col justify-between items-center'>
                <h1 className='text-lg md:text-3xl font-bold'>
                    Mission
                </h1>
                <p className='leading-loose py-10 md:max-w-[60vw] max-w-[70vw] md:text-center text-justify first-letter:text-2xl first-letter:font-semibold'>
                Our mission is to equip you with the resources you need to thrive. Whether you can attend just a few or many events, we’ve got you covered. Dive into enlightening tech talks that offer insights from company recruiters and valuable background information on internships. Forge lasting connections with like-minded peers through our socials. Explore various topics through our engaging workshops. Plus, TAGS hosts recurring meetings to help you hone essential industry skills. Don’t miss out on our other exciting events – stay updated through our weekly email updates. We look forward to seeing you soon!
                </p>
                <div className='flex flex-col md:flex-row justify-center items-center gap-3'>

                    <button onClick={() => setShowModal(true)} className="bg-[#FF5F0F] focus:ring-1 ring-white border border-white/[0.7] bg-opacity-80 backdrop-blur-sm hover:bg-orange-500 hover:bg-opacity-100 text-white font-bold py-2 px-4 rounded-md">
                        Join Mailing List
                    </button>
                    

                    <button className='bg-[#0455A4] focus:ring-1 ring-white border border-white/[0.7] bg-opacity-80 backdrop-blur-sm hover:bg-blue-500 hover:bg-opacity-100 text-white font-bold py-2 px-4 rounded-md'>
                        Join Discord
                    </button>

                    
                </div>
                
            </div>
            
        </section>
        {showModal && <Modal handleClick={() => setShowModal(false)}/>}
        </>
    
   
    
  )
}

export default Mission