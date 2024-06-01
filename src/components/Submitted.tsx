"use client";
import React from 'react'
import { useRef } from 'react'

const Submitted = ({ handleClick }: 
    {
        handleClick: () => void
    }
) => {
    const modalRef = React.useRef(null);
const closeModal = (e: React.SyntheticEvent) => {
    if(modalRef.current === e.target) {
        handleClick();
    }
}

  return (
    <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50'>
         <div className='animate-popup md:max-w-[60vw] max-w-[80vw] rounded-lg bg-dark px-5 py-5 gap-y-5 text-white flex flex-col gap-5'>
            <div className='flex w-full justify-center flex-col gap-y-5'>
                <h1 className='text-xl font-bold'>Successfully Received</h1>

                <button type='button' onClick={handleClick} className='bg-[#0455A4] place-self-center w-full dark:brightness-90 hover:bg-blue-800 focus:ring-2 ring-[#0455A4] h-fit px-3 py-[6px] font-semibold rounded-md border border-white/[0.2]'>Ok</button>
            </div>
           
            
        </div>
        
    </div>
   
  )
}

export default Submitted