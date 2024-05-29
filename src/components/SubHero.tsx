import React from 'react'

const SubHero = ({ title, }: {
  title: string,
}) => {
  return (
    <div className='w-screen h-[40vh] max-h-[800px]'>
       <div className='w-full h-[30%] bg-white  md:bg-cover flex items-center justify-center'>

      </div>  
      <div className={`w-full h-[70%] bg-[url("../images/quad.jpg")]  md:bg-cover flex items-center justify-center`}>
        <h1 className='text-white text-4xl md:text-5xl'>{title}</h1>
      </div>
    </div>
    
  )
}

export default SubHero