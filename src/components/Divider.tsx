import React from 'react'

const Divider = () => {
  return (
    <div className=' w-screen h-[70vh] md:h-[50vh] flex flex-col md:flex-row justify-around items-center p-10 md:gap-0 gap-10 flex-wrap'>
        <div className='fixed w-screen h-screen -z-10 top-0 left-0 bg-[url("../images/ECEB.jpg")] bg-cover bg-blend-overlay bg-gray-500'></div>
        <div className='pop-in flex flex-col justify-center items-center gap-1'>
            <h1 className='text-white text-3xl font-extrabold'>900+</h1>
            <p className='text-white font-bold'>Members</p>
        </div>
        
        <div className='pop-in flex flex-col justify-center items-center gap-1'>
            <h1 className='text-white text-3xl font-extrabold'>150+</h1>
            <p className='text-white font-bold'>Events</p>
        </div>
        
        <div className='pop-in flex flex-col justify-center items-center gap-1'>
            <h1 className='text-white text-3xl font-extrabold'>10+</h1>
            <p className='text-white font-bold'>Workshops</p>
        </div>
        
    
    </div>
  )
}

export default Divider