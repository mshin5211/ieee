import React from 'react'

const Divider = () => {
  return (
    <div className=' w-screen h-[70vh] md:h-[50vh] flex flex-col md:flex-row justify-around items-center p-10 md:gap-0 gap-10 flex-wrap'>
        <div className='fixed w-screen h-screen -z-10 top-0 left-0 bg-[url("../images/ECEB.jpg")] bg-cover'></div>
        <div className='pop-in flex flex-col justify-center items-center gap-1'>
            <h1 className='text-white text-3xl font-extrabold'>1000+</h1>
            <p className='text-white font-bold'>Events</p>
        </div>
        
        <div className='pop-in flex flex-col justify-center items-center gap-1'>
            <h1 className='text-white text-3xl font-extrabold'>800+</h1>
            <p className='text-white font-bold'>Members</p>
        </div>
        
        <div className='pop-in flex flex-col justify-center items-center gap-1'>
            <h1 className='text-white text-3xl font-extrabold'>Divider</h1>
            <p className='text-white font-bold'>something</p>
        </div>
        
    
    </div>
  )
}

export default Divider