<<<<<<< HEAD
import React from "react"
=======
import React, { useState } from "react"
>>>>>>> 5ce4184552cd3dc25d06e01cab037a8c36cd4408
import axios from 'axios'


const FavoritesDisplay = (props) => {
<<<<<<< HEAD
    // iterates over array of object (Calendar.js)
    let favoritesList = props.favorites.map((event, i) => {

        console.log(Object.keys(process.env))
        console.log(process.env.REACT_APP_SERVER_URL)

        let desc = ""
        if (event.description) {
            desc = event.description.replace(/(<([^>]+)>)/ig, '');
            desc = desc.replace(/&#39;/g, "'")
            desc = desc.replace(/&quot;/g, '')
        }

        let headerOptions = {
                'accept': 'application/json',
                'accept': 'text/json',
                'accept': 'text/javascript',
                'Content-Type': 'application/json'
            }   

        let handleClick = (e) => {
            // e.preventDefault()
            axios.delete(`${process.env.REACT_APP_SERVER_URL}v1/favorites/deleteFavorite/${event._id}`)
            .then(response => {
                props.handleDelete()
                console.log(event._id)
                if (response.status === 200) {
                    console.log(response.data.message)
                } else {
                    console.log(response.statusText)
                }
            })
            .catch(err => console.log(err.message))
            
        }
        // let handleClick = (e) => {
            
        //     console.log(`ping! ` + Object.keys(e))
        //     console.log(`e.target: ` + Object.keys(e.currentTarget))
        //     console.log(`event id is: ${event.id}`)
        //     fetch(`${process.env.REACT_APP_SERVER_URL}v1/favorites/testpost`, {
        //         method:"POST",
        //         body: JSON.stringify({
        //             "id":"chocolates"
        //         }),
        //         headers:headerOptions
        //     })
        //     // .then(res => res.json())
        //     .then(response => {
        //         console.log(`bingo bongo! `+ JSON.stringify(response))
        //                 })
        //     .catch(err => {
        //         console.error(err)
        //     })
        // }
        
        return (
            <div class="card border mb-3" styles="max-width: 20rem;">
                <div class="card-header">{event.start_time}</div>
                <div class="card-body">
                    <h4 class="card-title">{event.title}</h4>
                    <p class="card-text">{event.venue_address}</p>
                    <p class="card-text">{desc}</p>
                    <button onClick={handleClick} className={`deleteButton`} id={`${event._id}`}>Remove Event from Favorites</button>
                </div>
            </div>
        )
    })
    console.log(favoritesList)

    return (
        <div className="favoritesDisplay">
            {favoritesList}
=======
    // let user = props.user
    // let eventful = props.events

    // let [email, setEmail] = useState('')
    // let handleEmail = (e) => {
    //     setEmail(e.target.value)
    // }

    // iterates over array of object (Calendar.js)
    // let eventsList = props.events.map((eventful, i) => {
    //     let desc = ""
    //     if (eventful.description) {
    //         desc = eventful.description.replace( /(<([^>]+)>)/ig, '');
    //         desc = desc.replace(/&#39;/g, "'")
    //         desc = desc.replace(/&quot;/g, '')
    
    // }

    // let handleAdd = (e) => {
    //     let newFavorite = {
    //         email: user.email,
    //         value: eventful.id
    //     }
    //     axios.post(`${process.env.REACT_APP_API}/v1/users/add`, newFavorite)
    //     .then (res => {
    //         console.log(res)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

    //     return (

    //         //console.log('eventfulsList return: ' + i + eventful.id)
    //         <div class="card border mb-3" styles="max-width: 20rem;">
    //         <div class="card-header">{eventful.start_time}</div>
    //         <div class="card-body">
    //             <h4 class="card-title">{eventful.title}</h4>
    //             <p class="card-text">{eventful.venue_address}</p>
    //             <p class="card-text">{desc}</p>
    //             <form method="PUT" encType="application/x-www-form-urlencoded" onSubmit={handleAdd} >
    //                 <button type="submit" class="btn btn-info">Add to Favorites</button>
    //             </form>
    //         </div>
    //     </div>
    //         )
    //     })   

    return (
        <div className="eventDisplay">
            
>>>>>>> 5ce4184552cd3dc25d06e01cab037a8c36cd4408
        </div>
    );
}

export default FavoritesDisplay