import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import EventName from './EventComponents/EventName'
import EventLocation from './EventComponents/EventLocation'
import axios from 'axios';

export default function EventsTemplate() {

    const defaultEventsState = [{"title": "Fetching Events, please wait..."}]

    // test array of objects to mimic API response
    const testEvents = [{
        "url": "http://sandiego.eventful.com/events/lgbt-book-club-/E0-001-134699507-9?utm_source=apis&utm_medium=apim&utm_campaign=apic",
        "id": "E0-001-134699507-9",
        "city_name": "San Diego"
    }]
    //backup url in case things get hosed
    let backupUrl = `https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?app_key=NFRS6FwLVhcNKTWD&keywords=concerts&location=Seattle&date=Future`
    
    // declare a variable with an empty array
    let singleEvent = []

    //calls API on page render
    useEffect(() => {
        //set events state to default method while axios call processes
        setEvents(defaultEventsState)
        //call the website. I moved the url to a variable to make it easier to work with
        let apiUrl = `https://api.eventful.com/json/events/search?app_key=NFRS6FwLVhcNKTWD&keywords=concerts&location=Seattle&date=Future`
        axios.get(apiUrl)
        //anonymous promise function to be processed when frontend recieves response from api
        .then(response => {
            singleEvent = []
            let eventfulData = response.data.events.event
            eventfulData.forEach(function(eventInfo) {
                var i = 0
                if (i == singleEvent.length) {
                    singleEvent.push(`${eventInfo.title}`)
                } 
            })
            //test log for debugging .env
            //console.log(`${process.env.EVENTFUL_KEY}`)
            //sets events to parsed response
            setEvents(response.data.events.event)
            //visualization of state for development
            //console.log(`🌊🌊 ${response.data.events.event}  🌊🌊`)
            console.log(singleEvent)
        })

        .catch(err => console.log(err))

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
        <div className="row margin">
            <div className="col-lg-6 offset-lg-3">
                <h1>Event Details:</h1>
                <EventName events={events} />

                {/* <p>{JSON.stringify(events)}</p> */}
            </div>
        </div>
    )

}
