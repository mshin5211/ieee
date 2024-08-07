"use client";
import React, { CSSProperties } from 'react'
import { useRef } from 'react'
import { BeatLoader } from 'react-spinners'

const Modal = ({ handleClick, handleSubmitted, handleEmailError }: 
    {
        handleClick: () => void,
        handleSubmitted: () => void,
        handleEmailError: () => void
    }
) => {
    const modalRef = React.useRef(null);
    const closeModal = (e: React.SyntheticEvent) => {
    if(modalRef.current === e.target) {
        handleClick();
    }
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbziT2YC7IWVLRlmx1VxT7PEY76xfpVeCd1tImtITY_GxU0Y5IN0abSdMB16nJ5fKOumgA/exec'

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form);
        const email = formData.get('email') as string;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            handleEmailError();
            return;
        }
        formData.append("sheet", "mailing_list");
        setIsLoading(true)
        fetch(scriptURL, { method: 'POST', body: formData})
        .then(response => console.log('Success!', response))
        .then(() => setIsLoading(false))
        .then(() => handleSubmitted())
        .then(() => form.reset())
        .then(() => handleClick())
        .catch(error => console.error('Error!', error.message))
    }

    const [isLoading, setIsLoading] = React.useState(false);

    const override: CSSProperties = {
        position: 'fixed',
        top: '50%'
      };

  return (
    <div ref={modalRef} onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50'>
         <div className='animate-popup border-[#0455A4] ring-2 border-2 md:max-w-[60vw] max-w-[80vw] rounded-lg bg-dark px-10 py-10 gap-y-5 text-white flex flex-col gap-5'>
            <div className='flex w-full justify-center flex-col'>
                <h1 className='text-3xl font-bold'>Join our newsletter!</h1>
                <p className='mt-5 text-lg'>Get the latest updates on our events and activities</p>
                <form onSubmit={handleSubmit} className='' action='' method='POST'>
                    <label className='flex items-center jusitfy-center mt-5' htmlFor="email">Email:  
                         <input required name='email' className=' text-black dark:text-white w-full rounded ml-3 p-2' type="email" placeholder="Enter your email address"/>
                    </label>
                    <div className='flex justify-end mt-5 gap-2 items-center'>
                        <button type='button' onClick={handleClick} className=' bg-[#0455A4] dark:brightness-90 hover:bg-blue-800 focus:ring-2 ring-[#0455A4] w-fit h-fit px-3 py-[6px] font-semibold rounded-md border border-white/[0.2]'>Cancel</button>
                        <button type='submit' className='bg-[#FF5F0F] dark:brightness-90 hover:bg-[#ff430f] focus:ring-2 ring-[#FF5F0F] w-fit h-fit px-3 py-[6px] font-semibold rounded-md border border-white/[0.2]'>Subscribe</button>
                    </div>
                    
                </form>
            </div>
           
            
        </div>
        <BeatLoader color='#FF5F0F' cssOverride={override} loading={isLoading} size={20}/>
    
        
    </div>
   
  )
}

export default Modal