import React from 'react';

const Overview = () => {
  return (
    <section className='text-slideIn grid grid-cols-1 md:grid-cols-1 justify-items-center content-center gap-5 mt-10'>
        <div className='flex flex-col justify-between items-center'>
            <h1 className='text-lg md:text-3xl font-bold'>
                Overview
            </h1>
            <p className='py-10 md:max-w-[60vw] max-w-[70vw] md:text-center text-justify leading-loose'>
                <span className='text-2xl font-semibold'>IEEE</span> (pronounced I-Triple-E), which stands for the Institute of Electrical and Electronics Engineers, is known as the world&apo;s largest professional association for the advancement of technology. Here at the University of Illinois at Urbana-Champaign, IEEE represents the second largest student branch in the nation. Though it may seem from the name that we consist of students only from the Electrical and Computer Engineering department, we in fact encompass all different fields and welcome this diversity. Our organization strives to further students professional and educational development through a wide array of opportunities. We host tech talks, info sessions, luncheons, workshops, and socials. We also provide students with the opportunity to work on projects and compete in competitions. IEEE at the University of Illinois is a great way to meet new people, learn new things, and have fun!
            </p>
            <div></div>
        </div>

    </section>
  )
}

export default Overview