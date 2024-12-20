'use client'
import React, { CSSProperties } from 'react'
import { useState } from 'react'
import Submitted from './Submitted'
import { BeatLoader } from 'react-spinners'
import EmailError from './EmailError'


const ContactForm = () => {

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwuRnP6BIpIyvQc5jQBXhGcd7dxKrK80-zYGYb_czEBZK-ckZj5QlsSGIons5uXavjG2A/exec'

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form);
        const email = formData.get('email') as string;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setEmailError(true);
            return;
        }
        formData.append("sheet", "contact");
        setIsLoading(true)
        fetch(scriptURL, { method: 'POST', body: formData})
        .then(response => console.log('Success!', response))
        .then(() => setIsLoading(false))
        .then(() => setIsSubmitted(true))
        .then(() => form.reset())
        .catch(error => console.error('Error!', error.message))
    }

    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);

    const override: CSSProperties = {
        position: 'fixed',
        top: '50%'
      };

  return (
    
    <div className='relative flex justify-center items-center flex-col'>
        <h1 className='mt-10 text-lg md:text-3xl font-bold text-center'>Contact Us</h1>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center my-10 p-5 bg-dark dark:bg-[#011627] w-[80vw] md:w-[60vw] lg:w-[50vw] gap-5 rounded-md' action='' method='POST'>
            <div className='flex flex-col w-full justify-center items-start'>
                <label className='text-white text-md font-semibold mb-1' htmlFor='name'>Name:</label>
                <input required className='w-full rounded-sm p-1' type='text' name='name' id='name' placeholder='Name' />
            </div>
            <div className='flex flex-col w-full justify-center items-start'>
                <label className='text-white text-md font-semibold mb-1' htmlFor='email'>Email:</label>
                <input required className='w-full rounded-sm p-1' type='email' name='email' id='email' placeholder='email@email.com'/>
            </div>
            <div className='flex flex-col w-full justify-center items-start'>
                <label className='text-white text-md font-semibold mb-1' htmlFor='message'>Message:</label>
                <textarea required className='w-full h-[100px] rounded-sm p-1' name='message' id='message' placeholder='Message' />
            </div>
            <button className='bg-[#FF5F0F] place-self-center border border-white/[0.2] focus:ring-1 ring-white backdrop-blur-sm hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-md' type='submit'>Submit</button>
        </form>
        <BeatLoader color='#FF5F0F' cssOverride={override} loading={isLoading} size={20}/>
        {isSubmitted && <Submitted handleClick={() => setIsSubmitted(false)}/>}
        {emailError && <EmailError handleClick={() => setEmailError(false)}/>}
        <div className='grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 w-[90vw] lg:gap-10 gap-20 h-[70vh] p-10 justify-items-center content-center'>
            <div className='flex justify-center items-center flex-col w-full h-full'>
                <h1 className='text-lg md:text-3xl font-bold text-center'>Find Us</h1>
                <hr className='border border-black my-5 w-[50%]'></hr>
                <p className='text-center'>University of Illinois at Urbana-Champaign</p>
                <p className='text-center'>Electrical and Computer Engineering Building</p>
                <p className='text-center'>306 N Wright St, Urbana, IL 61801</p>
                <p className='text-center'>Room 1016</p>
            </div>
            <iframe className='border-4 place-self-center border-dark w-full h-full max-h-[600px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6102.456078120263!2d-88.23059812430482!3d40.1149212714897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd741bc2575ed%3A0x28db54436635eb67!2sElectrical%20and%20Computer%20Engineering%20Building%2C%20306%20N%20Wright%20St%2C%20Urbana%2C%20IL%2061801!5e0!3m2!1sen!2sus!4v1717197966781!5m2!1sen!2sus" loading="lazy" ></iframe>

        </div>
        
    </div>
  )
}

export default ContactForm