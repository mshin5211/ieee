import ContactForm from '@/components/ContactForm'
import SubHero from '@/components/SubHero'
import React from 'react'

const Contact = () => {
  return (
    <div className='relative flex justify-center items-center
    flex-col mx-auto sm:px-10 px-5 overflow-clip gap-y-5 dark:bg-dark'>
      <SubHero title='Contact' />
      <ContactForm />
    </div>
  )
}

export default Contact