import React from 'react';

const AboutUs = () => {
  return (
    <div className='w-screen bg-white dark:bg-dark'>
        <section className='text-slideIn grid grid-cols-1 md:grid-cols-1 justify-items-center content-center gap-5 py-16'>
          <div className='flex flex-col justify-between items-center'>
              <h1 className='text-lg md:text-3xl font-bold'>
                  About Us
              </h1>
              <p className='py-10 md:max-w-[60%] max-w-[70%] text-justify md:text-center md:text-xl leading-loose'>
              The purpose of IEEE as an organization shall be the dissemination of knowledge of the theory and practice of all aspects of electrical and computer engineering, as well as the allied Branches of engineering and the related arts and sciences. IEEE serves as a mean for students to further their professional and educational development.
              </p>
              <div></div>
          </div>

      </section>

    </div>
    
  )
}

export default AboutUs