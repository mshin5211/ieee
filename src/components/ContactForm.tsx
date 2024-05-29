import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <h1 className='mt-10 text-lg md:text-3xl font-bold text-center'>Contact Us</h1>
        <form className='flex flex-col justify-center items-center my-10 p-5 bg-dark dark:bg-[#011627] w-[80vw] md:w-[60vw] lg:w-[50vw] gap-5 rounded-md' action={''} method='POST'>
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
                <textarea required className='w-full rounded-sm p-1' name='message' id='message' placeholder='Message' />
            </div>
            <button className='bg-[#FF5F0F] place-self-center border border-white/[0.2] focus:ring-1 ring-white backdrop-blur-sm hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-md' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm