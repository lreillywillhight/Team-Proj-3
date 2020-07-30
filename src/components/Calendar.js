import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import EventsDisplay from './EventsDisplay'
import axios from 'axios';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


export default function Calendar() {

    // test array of objects to mimic API response
    const testEvents = [{
        "url": "http://sandiego.eventful.com/events/lgbt-book-club-/E0-001-134699507-9?utm_source=apis&utm_medium=apim&utm_campaign=apic",
        "id": "E0-001-134699507-9",
        "city_name": "San Diego"
    }]
    // backup axios call in case things get hosed
    let backupCall = `https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?app_key=NFRS6FwLVhcNKTWD&keywords=concerts&location=Seattle&date=Future`

    //calls API on page render
    useEffect(() => {
        //set events state to wait message while axios call gets data
        setEvents([{"title": "Fetching Events, please wait..."}])
        //variable to be set on page render, write to this variable to adjust search parameters (querys and responses, see eventful documentation)
        let apiUrl = `http://api.eventful.com/json/events/search?app_key=NFRS6FwLVhcNKTWD&keywords=concerts&location=Seattle&date=Future`
        //ideally, we will set apiUrl to a useState(), to allow updating displayed data without reloading page
        axios.get(backupCall)
        //promise function, 'response' is what we're sent with axios.get(apiUrl), after it's arrived to our frontend server, JS will continue processing.
        .then(response => {
            //test to debug .env)
            // console.log(`${process.env.EVENTFUL_KEY}`)
            //change events state to formatted response
            setEvents(response.data.events.event)
            //data visualization in browser console for debugging
            console.log(response.data.events.event)
        })
        .catch(err => console.log('ERROR IN frontend /components/Calendar.js: '+JSON.stringify(err)))
    }, [])

    //array of objects, iterated on in EventsDisplay.js
    const [events,setEvents] = useState(testEvents)

    return (
        <div className="Calendar">
            <div class="row my-5">
                <div class="col-4 offset-1">
                    <h3 id="calendar-title">Upcoming Events</h3>
                    <div id="events-display-container">
                        <EventsDisplay events={events} />
                    </div>
                </div>
                <div class="col-6">
                    <FullCalendar
                    plugins={[ dayGridPlugin ]}
                    initialView="dayGridMonth"
                    
                    />
                </div>
            </div>
        </div>
    )
}

