import React from 'react';
import axios from 'axios';

export default function AddButton(props) {
    const handleAdd = e => {
        console.log('hello from addbutton')
    }
    // const handleAdd = e => {
    //     e.preventDefault()

<<<<<<< HEAD
    //     axios.get(`${process.env.REACT_APP_SERVER_URL}favorites/`)
    //         .then(response => {
    //             console.log(response)
    //             if (response.status === 200) {
    //                 props.refresh(true)
    //             } else {
    //                 props.setError(response.statusText)
    //             }
    //         }).catch(err => {
    //             props.setError(err.message)
=======
        axios.delete(`${process.env.REACT_APP_API}favorites/${props.id}`)
            .then(response => {
                if (response.status === 200) {
                    props.refresh(true)
                } else {
                    props.setError(response.statusText)
                }
            }).catch(err => {
                props.setError(err.message)
>>>>>>> 5ce4184552cd3dc25d06e01cab037a8c36cd4408

    //         })
    // }

    return (
        <form className="delete-bounty-button" onSubmit={handleAdd}>
            <input type="submit" value="Remove this Bounty" />
        </form>
    )
}
// test