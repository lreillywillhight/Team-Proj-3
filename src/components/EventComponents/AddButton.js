import React from 'react';
import axios from 'axios';

export default function AddButton(props) {
    const handleAdd = e => {
        e.preventDefault()

        axios.delete(`${process.env.REACT_APP_API}/favorites/${props.id}`)
            .then(response => {
                if (response.status === 200) {
                    props.refresh(true)
                } else {
                    props.setError(response.statusText)
                }
            }).catch(err => {
                props.setError(err.message)

            })
    }

    return (
        <form className="delete-bounty-button" onSubmit={handleAdd}>
            <input type="submit" value="Remove this Bounty" />
        </form>
    )
}
// test