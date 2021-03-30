import React from 'react'

function Movie({movie, deleteMovie}) {

    const handleDelete = () => {
        deleteMovie(movie['_id']);
    }

    return (
        <div>
            <li>
               <h2>{movie.title}</h2>
               <p>{movie.description}</p>
               <p>{movie.year}</p>
               <p>{movie.genre}</p>
            </li> 
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default Movie
