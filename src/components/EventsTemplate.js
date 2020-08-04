import React, {useState, useEffect} from 'react'
<<<<<<< HEAD
import EventName from './EventComponents/EventName'
=======
import { Link } from 'react-router-dom';
import FavoritesDisplay from './FavoritesDisplay'
import EventLocation from './EventComponents/EventLocation'
>>>>>>> 5ce4184552cd3dc25d06e01cab037a8c36cd4408
import axios from 'axios';

export default function EventsTemplate(props) {

    //const defaultEventsState = [{"title": "Fetching Events, please wait..."}]
    const defaultFavsState = [{"title": "Fetching Events, please wait..."}]

    // test array of objects to mimic API response
    const testFavs = [{
        "eventId": "E0-01"
    }]
    //backup url in case things get hosed
    let backupUrl = `https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/get?app_key=${process.env.EVENTFUL_API}&id=${props.user.favorite}`
    
    // declare a variable with an empty array
    let singleEvent = []

    //calls API on page render
    useEffect(() => {
<<<<<<< HEAD
        //set events state to default method while axios call processes
        setEvents(defaultEventsState)
        //call the website. I moved the url to a variable to make it easier to work with
        let apiUrl = `https://api.eventful.com/json/events/search?app_key=NFRS6FwLVhcNKTWD&keywords=concerts&location=Seattle&date=Future`
        axios.get(apiUrl)
        //anonymous promise function to be processed when frontend recieves response from api
=======
        console.log(props)
        setFavs(defaultFavsState)
        axios.get(`${process.env.REACT_APP_API}v1/favorites`)
>>>>>>> 5ce4184552cd3dc25d06e01cab037a8c36cd4408
        .then(response => {

            console.log(response.data)
            console.log(response.data[0].eventId)
            setFavs(response.data[0].eventId)
            console.log(favs)

        })
<<<<<<< HEAD

        .catch(err => console.log(err))

=======
        .catch(err => console.log('ERROR IN frontend /components/Calendar.js: '+JSON.stringify(err)))
>>>>>>> 5ce4184552cd3dc25d06e01cab037a8c36cd4408
    }, [])

    //array of objects, iterated on in EventsDisplay.js
    const [favs,setFavs] = useState(testFavs)


    return (
        <div className="row margin">
            <div className="col-lg-6 offset-lg-3">
                <h1>Event Details:</h1>
                <FavoritesDisplay events={favs} />

                {/* <p>{JSON.stringify(events)}</p> */}
            </div>
        </div>
    )

}
