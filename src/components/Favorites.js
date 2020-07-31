import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import FavoritesDisplay from './FavoritesDisplay'
import axios from 'axios';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


export default function Favorites(props) {

    const [favorites,setFavorites] = useState([{1:""},{2:""}])

    //calls API on page render
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/v1/favorites/`, {
            headers: {"accept":"application/json",
            'content-type':'application/json'
            }
        })
        .then(favoritesList => {
            // makeArray()
            console.log(favoritesList.data)
            setFavorites(favoritesList.data)
            console.log(favorites)
        })
    },[])

   const handleDelete = () => {
    axios.get(`${process.env.REACT_APP_API}/v1/favorites/`, {
        headers: {"accept":"application/json",
        'content-type':'application/json'
        }
    })
    .then(favoritesList => {
        // makeArray()
        console.log(favoritesList.data)
        setFavorites(favoritesList.data)
        console.log(favorites)
    })
    .catch(err => console.log(err))
   }

    return (
        <div className="Calendar">
            <div class="row margin">
                <div class="col-4 offset-1">
                    <h3 id="calendar-title">Upcoming Events</h3>
                    <div id="events-display-container">
                        {/* {favorites} */}
                        <FavoritesDisplay favorites={favorites} handleDelete={handleDelete}/>
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

