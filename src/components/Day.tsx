"use client";
import React from 'react'
import { useState } from 'react'

const Day = ({ date, events }: {
    date: string,
    events: {
        title: string,
        id: number,
        href?: string,
        detail?: string,
        linkText?: string
    }[]
}) => {
    
    const [isVisible, setIsVisible] = useState(false);

  return (

    <div onClick={() => {setIsVisible(!isVisible)}} className='flex flex-col w-full rounded-lg justify-center items-center'>
        <div className='group hover:cursor-pointer hover:bg-white hover:border-dark border-white border flex justify-center items-center p-1 bg-dark w-full rounded-md'>
            <h1 className='text-xl text-white group-hover:text-dark font-bold'>{date}</h1>
        </div>
       <div id='dayCard' className={`${isVisible ? 'visible' : 'hidden'} rounded-lg flex flex-col justify-center items-center w-full py-5 px-10 gap-y-5 bg-white`}>
            {events.map((event) => (
                <p key={event.id} className='text-black text-center'>{event.title} - <span className='font-semibold'>{event.detail}</span> - <a href={event.href} className='text-blue-500 font-semibold'>{event.linkText}</a></p>
            ))}
            
        </div>
    </div>
    

  )
}

export default Day