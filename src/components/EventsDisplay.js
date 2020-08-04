<<<<<<< HEAD
import React from "react"
import axios from 'axios'


const EventsDisplay = (props) => {
    // iterates over array of object, cleans up some regex to look nice
    let eventsList = props.events.map((event, i) => {
        let desc = ""
        if (event.description) {
            desc = event.description.replace(/(<([^>]+)>)/ig, '');
            desc = desc.replace(/&#39;/g, "'")
            desc = desc.replace(/&quot;/g, '')
        }

        //headers to pass proper format to db
        let headerOptions = {
                'accept': 'application/json',
                // 'accept': 'text/json',
                'accept': 'text/javascript',
                'Content-Type': 'application/json'
            }   
        
        //add a favorite event to the database
        let handleClick = (e) => {
            console.log(`${process.env.REACT_APP_SERVER_URL}`)
            console.log(event)
            axios.post(`${process.env.REACT_APP_SERVER_URL}v1/favorites/testpost`, {eventId:`${event.id}`,date:`${event.start_time}`, location:`${event.venue_address}`, description: `${event.description}`}
            // , {
            //     headers:headerOptions
            // }
            )
            .then(response => {
                console.log(`bingo bongo! `+ JSON.stringify(response.data))
                        })
            .catch(err => {
                console.error(err)
            })
        }
        
        
        return (
            <div class="card border mb-3" styles="max-width: 20rem;">
                <div class="card-header">{event.start_time}</div>
                <div class="card-body">
                    <h4 class="card-title">{event.title}</h4>
                    <p class="card-text">{event.venue_address} <br/>
                    {event.city_name} , {event.region_abbr}
                    </p>
                    <p class="card-text">{desc}</p>
                    <button onClick={handleClick} className={`addButton`} id={`${event.id}`}>Add Event to Favorites</button>
                </div>
=======
import React, { useState } from "react"
import axios from 'axios'
import { Redirect } from 'react-router-dom'


const EventsDisplay = (props) => {
    let user = props.user
    let eventful = props.events
    let [redirect, setRedirect] = useState(false)

    let [email, setEmail] = useState('')
    let handleEmail = (e) => {
        setEmail(e.target.value)
    }

    let [value, setValue] = useState('')
    let handleValue = (e) => {
        setEmail(e.target.value)
    }

        // iterates over array of object (Calendar.js)
        let eventsList = props.events.map((eventful, i) => {
            let desc = ""
            if (eventful.description) {
                desc = eventful.description.replace( /(<([^>]+)>)/ig, '');
                desc = desc.replace(/&#39;/g, "'")
                desc = desc.replace(/&quot;/g, '')
    
            }

    let handleAdd = (e) => {
        let newFavorite = {
            email: user.email,
            value: eventful.id
        }
        axios.post(`${process.env.REACT_APP_API}v1/users/add`, newFavorite)
        .then (res => {
            setRedirect(true)
        })
        .catch(err => {
            console.log(err)
        })
    }

    let handleRemove = (e) => {
        let removeFavorite = {
            email: user.email,
            value: eventful.id
        }
        axios.post(`${process.env.REACT_APP_API}v1/users/remove`, removeFavorite)
        .then (res => {
            setRedirect(true)
        })
        .catch(err => {
            console.log(err)
        })
    }

    if (redirect) return <Redirect to='/calendar' />

    // let handleAction = `${process.env.REACT_APP_API}/v1/users/add`



        return (

            //console.log('eventfulsList return: ' + i + eventful.id)
            <div class="card border mb-3" styles="max-width: 20rem;">
            <div class="card-header">{eventful.start_time}</div>
            <div class="card-body">
                <h4 class="card-title">{eventful.title}</h4>
                <p class="card-text">{eventful.id}</p>
                <p class="card-text">{eventful.venue_address}</p>
                <p class="card-text">{desc}</p>
                <form method="PUT" encType="application/x-www-form-urlencoded" onSubmit={handleAdd} >
                    <input hidden type="email" name="email" email={user.email} onChangle={handleEmail}/>
                    <input hidden type="text" name="value" value={eventful.id} onChangle={handleValue}/>
                    <button type="submit" class="btn btn-info">Add to Favorites</button>
                </form>
                <br />
                <form method="PUT" encType="application/x-www-form-urlencoded" onSubmit={handleRemove} >
                    <input hidden type="email" name="email" email={user.email} onChange={handleEmail}/>
                    <input hidden type="text" name="value" value={eventful.id} onChange={handleValue}/>
                    <button type="submit" class="btn btn-info">Remove from Favorites</button>
                </form>
>>>>>>> 5ce4184552cd3dc25d06e01cab037a8c36cd4408
            </div>
        </div>
            )
        })   

    return (
        <div className="eventDisplay">
            {eventsList}
        </div>
    );
}

export default EventsDisplay