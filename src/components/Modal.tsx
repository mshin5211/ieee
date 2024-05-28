"use client";
import React from 'react'
import { useRef } from 'react'
const Modal = ({ handleClick }: 
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
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleClick();
    alert('Subscribed!');
}
  return (
    <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50'>
         <div className='animate-popup md:max-w-[60vw] max-w-[80vw] rounded-lg bg-dark px-10 py-10 gap-y-5 text-white flex flex-col gap-5'>
            <div className='flex w-full justify-center flex-col'>
                <h1 className='text-3xl font-bold'>Join our newsletter~</h1>
                <p className='mt-5 text-lg'>Get the latest updates on our events and activities</p>
                <form onSubmit={handleSubmit} className='' action='' method='POST'>
                    <label className='flex items-center jusitfy-center mt-5' htmlFor="email">Email:  
                         <input required name='email' className=' text-black dark:text-white w-full rounded ml-3 p-2' type="email" placeholder="Enter your email address"/>
                    </label>
                    <div className='flex justify-end mt-5 gap-2 items-center'>
                        <button type='button' onClick={handleClick} className='bg-[#0455A4] dark:brightness-90 hover:bg-blue-800 focus:ring-2 ring-[#0455A4] w-fit h-fit px-3 py-[6px] font-semibold rounded-md border border-white/[0.2]'>Cancel</button>
                        <button type='submit' className='bg-[#FF5F0F] dark:brightness-90 hover:bg-orange-600 focus:ring-2 ring-[#FF5F0F] w-fit h-fit px-3 py-[6px] font-semibold rounded-md border border-white/[0.2]'>Subscribe</button>
                    </div>
                    
                </form>
            </div>
           
            
        </div>
        
    </div>
   
  )
}

export default Modal