"use client";
import React from 'react'
import { useState } from 'react'

const Day = ({ date, events }: {
  date: string,
  events: {
    title: string,
    time: string,
    location: string,
    description: string,
  }[]
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div onClick={() => { setIsVisible(!isVisible) }} className='flex flex-col w-full rounded-lg justify-center items-center'>
      <div className='group hover:cursor-pointer hover:bg-white hover:border-dark border-white border flex justify-center items-center p-1 bg-dark w-full rounded-md'>
        <h1 className='text-xl text-white group-hover:text-dark font-bold'>{date}</h1>
      </div>
      <div id='dayCard' className={`${isVisible ? 'visible' : 'hidden'} rounded-lg flex flex-col justify-center items-center w-full py-5 px-10 gap-y-5 bg-white`}>
        {events.map((events, idx) => {
          let linkText = '';
          let href = '';
          let detail = '';

          if (typeof window !== 'undefined') {
            const parser = new DOMParser();
            const doc = parser.parseFromString(events.description, 'text/html');
            const linkElement = doc.querySelector('a');
            linkText = linkElement?.textContent || '';
            href = linkElement?.getAttribute('href') || '';
            detail = doc.body?.textContent?.replace(linkText, '').replace(href, '') || '';
          }

          return (
            <p key={idx} className='text-black text-center font-semibold'><span className='underline font-bold'>{events.title}</span> - {events.time} {events.location.length > 0 ? "-" : ""} {events.location} {detail.length > 0 ? "-" : ""} <span className='text-wrap'>{detail}</span> {href.length > 0 ? "-" : ""} <a href={href} className='text-blue-500 font-semibold'>{linkText}</a></p>
          )
        })}

      </div>
    </div>
  )
}

export default Day