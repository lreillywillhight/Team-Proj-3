import React, {useState, useEffect} from 'react'
import FavoritesDisplay from './FavoritesDisplay'
import axios from 'axios';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function Favorites(props) {
    
    const [favorites,setFavorites] = useState([{1:""},{2:""}])

<<<<<<< HEAD
    console.log('Favorites.js: ' +Object.keys(process.env))

    const [favorites,setFavorites] = useState([{1:""},{2:""}])

    //calls database on page render
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}v1/favorites/`, {
            headers: {"accept":"application/json",
            'content-type':'application/json'
            }
        })
        .then(favoritesList => {
            console.log(favoritesList.data)
            setFavorites(favoritesList.data)
            console.log(favorites)
        })
    },[])

    //updates state when delete button is pressed EventsTemplate.js
    const handleDelete = () => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}v1/favorites/`, {
        headers: {"accept":"application/json",
        'content-type':'application/json'
        }
    })
    .then(favoritesList => {
        setFavorites(favoritesList.data)
    })
    .catch(err => console.log(err))
   }
=======
    //calls database on page render
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}v1/users/`, {
            headers: {"accept":"application/json",
            'content-type':'application/json'
            }
        })
        .then(favoritesList => {
            console.log(favoritesList.data)
            setFavorites(favoritesList.data)
            console.log(favorites)
        })
    },[])
    
    
    // backup axios call in case things get hosed
    let backupUrl = `https://cors-anywhere.herokuapp.com/http://api.eventful.com/json/events/search?app_key=NFRS6FwLVhcNKTWD&location=90210`
>>>>>>> 5ce4184552cd3dc25d06e01cab037a8c36cd4408

   //render
    return (
        <div className="Calendar">
            <div class="row my-5">
                <div class="col-4 offset-1">
                    <h3 id="calendar-title">Upcoming Events</h3>
                    <div id="events-display-container">
<<<<<<< HEAD
                        {/* {favorites} */}
                        <FavoritesDisplay favorites={favorites} handleDelete={handleDelete}/>
=======
                        <FavoritesDisplay favorites={favorites} />
>>>>>>> 5ce4184552cd3dc25d06e01cab037a8c36cd4408
                        {JSON.stringify(props.user)}
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

