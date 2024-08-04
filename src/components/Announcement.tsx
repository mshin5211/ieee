'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Day from './Day'
import { announcementData, dailyAnnouncementData } from '@/_lib/data'

type GCalEvent = {
    summary: string,
    location?: string,
    description?: string,
    start: {
        dateTime: string
    },
    end: {
        dateTime: string
    }
}

type Days = Array<{
    date: string,
    events: {
        title: string,
        time: string,
        location: string,
        description: string,
    }[]
}>

const Announcement = () => {

    const [events, setEvents] = useState<Days>([]);

    const dateOptions = {
        weekday: 'long',
        month: 'long',
        day: '2-digit',
    } as const;

    const currentTime = new Date()
    console.log(currentTime.toISOString())
    const today = currentTime.toLocaleDateString('en-US', dateOptions);
    console.log(today);
    const finalTime = new Date(currentTime)
    finalTime.setDate(currentTime.getDate() + 6)
    const final = finalTime.toLocaleDateString('en-US', dateOptions);
    console.log(final);

    // const today = new Date()
    // const todaysDate = today.toDateString();
    // console.log(todaysDate);
    // const tmr = new Date()
    // tmr.setDate(today.getDate() + 1)
    // const tmrsDate = tmr.toDateString();
    // console.log(tmrsDate)

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const calendarID = '37b4c899f83aa44711cdfca5abb22f28bb17caeeebaadc7c67c8047f687fb88f@group.calendar.google.com'
                const calendarKEY = 'AIzaSyB0Re9SxaMPCAom0c0oBUeOdtkdiHPhAdU'
                const eventsUrl = `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events?key=${calendarKEY}&timeMin=${currentTime.toISOString()}&timeMax=${finalTime.toISOString()}`;
                const res = await fetch(eventsUrl);
                const { items } = await res.json() as { items: GCalEvent[] };

                const days: Array<{
                    date: Date,
                    events: {
                        title: string,
                        time: string,
                        location: string,
                        description: string,
                    }[]
                }> = [];
                let curr = new Date(currentTime);
                const final = new Date(finalTime);
                final.setDate(final.getDate() + 1);
                const finalDate = final.getDate();

                while (curr.getDate() !== finalDate) {
                    days.push({ date: curr, events: [] });
                    curr = new Date(curr);
                    curr.setDate(curr.getDate() + 1);
                }

                const events = items
                    .sort(({ start: { dateTime: firstStartTime } }, { start: { dateTime: secondStartTime } }) => {
                        return new Date(firstStartTime).getTime() - new Date(secondStartTime).getTime();
                    })
                    .map(({ summary, description, location, start: { dateTime: startTime }, end: { dateTime: endTime } }) => {
                        return {
                            title: summary,
                            start: new Date(startTime),
                            end: new Date(endTime),
                            location: location ?? "",
                            description: description ?? "",
                        };
                    })

                for (const event of events) {
                    const day = days.find(({ date }) => date.getDate() === event.start.getDate());

                    const timeOptions = {
                        hour: 'numeric',
                        minute: '2-digit',
                    } as const;
                    const start = event.start.toLocaleTimeString('en-US', timeOptions);
                    const end = event.end.toLocaleTimeString('en-US', timeOptions);

                    day?.events.push({
                        title: event.title,
                        description: event.description,
                        location: event.location,
                        time: `${start} : ${end}`
                    });
                }

                setEvents(
                    days.map(({ date, events }) => {
                        return {
                            date: date.toLocaleDateString('en-US', dateOptions), events
                        }
                    })
                )

            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);
    console.log(events);



    let weeklyEvents = []


    return (
        <div className='w-screen bg-white'>
            <section className='py-16 flex flex-col justify-center items-center text-slideIn'>
                <div className='flex flex-col gap-3 justify-center items-center'>
                    <h1 className='text-2xl lg:text-3xl text-center font-bold'>Upcoming Events</h1>
                    <hr className='border border-black my-3 w-[100%]'></hr>
                    {/* {announcementData.map((announcement) => (
                        <h2 key={announcement.id} className='text-lg font-semibold'>{announcement.title} -&gt; {announcement.date}</h2>
                    ))} */}
                </div>

                <div className='w-[80vw] flex flex-col justify-center mt-16 p-5 bg-dark dark:bg-[#011627] rounded-lg'>
                    {events.map((event, idx) => (
                        <Day key={idx} date={event.date} events={event.events} />
                    ))}
                </div>



            </section>
        </div>

    )
}

export default Announcement
