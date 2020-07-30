import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import EventsDisplay from './EventsDisplay'
import axios from 'axios';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


export default function Favorites(props) {

    // test array of objects to mimic API response
    const testEvents = [{
        "url": "http://sandiego.eventful.com/events/lgbt-book-club-/E0-001-134699507-9?utm_source=apis&utm_medium=apim&utm_campaign=apic",
        "id": "E0-001-134699507-9",
        "city_name": "San Diego"
    }]

    //calls API on page render
    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?app_key=NFRS6FwLVhcNKTWD&keywords=concerts&location=Seattle&date=Future`)
        .then(response => {
            console.log(`${process.env.EVENTFUL_KEY}`)
            setEvents(response.data.events.event)
            console.log(response.data.events.event)
        })
        .catch(err => console.log('ERROR IN frontend /components/Calendar.js: '+JSON.stringify(err)))
    }, [])

    //array of objects, iterated on in EventsDisplay.js
    const [events,setEvents] = useState(testEvents)

    // let eventNames = {
    //     events.map(event => {
    //         <div>
    //             <p>{event.name}</p>
    //             <br/>
    //         </div>
    //     })
    // }

    return (
        <div className="Calendar">
            <div class="row margin">
                <div class="col-4 offset-1">
                    <h3 id="calendar-title">Upcoming Events</h3>
                    <div id="events-display-container">
                        {/* <EventsDisplay events={events} /> */}
                    </div>
                </div>
                <div class="col-6">
                    <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                    />
                </div>
            </div>
            {/* <p>{JSON.stringify(events)} </p> */}
        </div>
    )
}

