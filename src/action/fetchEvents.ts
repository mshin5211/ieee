"use server"

import moment from "moment-timezone"

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

export const fetchEvents = async () => {

    const dateOptions = {
        timeZone: 'America/Chicago',
        weekday: 'long',
        month: 'long',
        day: '2-digit',
    } as const;

    // const currentTime = new Date();
    // const today = currentTime.toLocaleDateString('en-US', dateOptions);
    const startOfDay = moment.tz("America/Chicago").startOf('day');
    const finalOfDay = moment.tz("America/Chicago").add(7, 'days').startOf('day');
    // const finalTime = new Date(currentTime)
    // finalTime.setDate(currentTime.getDate() + 6)
    // const final = finalTime.toLocaleDateString('en-US', dateOptions);

        try {
            const calendarID = process.env.CALENDAR_ID; 
            const calendarKEY = process.env.CALENDAR_KEY; 
            const eventsUrl = `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events?key=${calendarKEY}&timeMin=${startOfDay.format()}&timeMax=${finalOfDay.format()}`;
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
            let curr = startOfDay.toDate();
            const final = finalOfDay.toDate();
            final.setDate(final.getDate() + 1);
            const finalDate = final.getDate();
            console.log(finalDate);

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
                    timeZone: 'America/Chicago',
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

            const fetchedEvents = days.map(({ date, events }) => {
                return {
                    date: date.toLocaleDateString('en-US', dateOptions),
                    events
                };
            });
            console.log(fetchedEvents);
            return fetchedEvents;

        } catch (error) {
            console.error('Error fetching events:', error);
            return [];
        }

        

}