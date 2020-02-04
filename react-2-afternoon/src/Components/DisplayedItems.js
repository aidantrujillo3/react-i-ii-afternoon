import React from 'react'

function DisplayedItems(props) {
    return (
        <div className="displayBox">
            <h2>{props.data.id}/25</h2>
            {props.data.name.first} {props.data.name.last}

        <div>
            <li>From: {props.data.city}, {props.data.country}</li>
            <li>Job Title: {props.data.title}</li>
            <li>Employer: {props.data.employer}</li>

            <div>
            Favorite Movies:
            <li>{props.data.favoriteMovies[0]}</li>
            <li>{props.data.favoriteMovies[1]}</li>
            <li>{props.data.favoriteMovies[2]}</li>
            </div>
        </div>

        </div>

    )
} 

export default DisplayedItems

