import React from 'react'
import Day from './Day'
import { announcementData, dailyAnnouncementData } from '@/_lib/data'


const Announcement = () => {
  return (
    <div className='mt-10 flex flex-col justify-center items-center'>
        <div className='flex flex-col gap-3 justify-center items-center'>
            <h1 className='text-3xl lg:text-4xl text-center font-bold mb-5'>Announcements</h1>
            {announcementData.map((announcement) => (
                <h2 key={announcement.id} className='text-lg font-semibold'>{announcement.title} -&gt; {announcement.date}</h2>
            ))}
        </div>

        <div className='w-[80vw] flex flex-col justify-center mt-20 p-5 bg-dark rounded-lg'>
            {dailyAnnouncementData.map((day) => (
                <Day key={day.id} date={day.date} events={day.events} />
            ))}
        </div>
        

        
    </div>
  )
}

export default Announcement