"use client";
import React from 'react'
import { useRef } from 'react'
import Image from 'next/image';

const CalendarModal = ({ handleClick }: 
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
         <div className='animate-popup md:max-w-[60vw] max-w-[80vw] w-[90vw] max-h-[80vh] aspect-square rounded-lg bg-dark px-5 py-5 gap-y-5 text-white flex flex-col gap-5'>
            <div className='flex flex-row w-full justify-between items-center'>
                Calendar
                <button className='w-6 h-6 relative flex justify-center items-center' onClick={() => handleClick()}>
                <Image className='object-contain filter invert' alt="close" src="/cross.png" fill={true} />
                </button>
            </div>
            
         
         <iframe className='w-full h-full' src="https://calendar.google.com/calendar/embed?src=37b4c899f83aa44711cdfca5abb22f28bb17caeeebaadc7c67c8047f687fb88f%40group.calendar.google.com&ctz=America%2FChicago"></iframe>
           
            
        </div>
        
    </div>
   
  )
}

export default CalendarModal