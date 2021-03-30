import React from 'react'

function Movie({movie}) {



    return (
        <div>
           <li>
               <h2>{movie.title}</h2>
               <p>{movie.description}</p>
               <p>{movie.year}</p>
               <p>{movie.genre}</p>
           </li> 
        </div>
    )
}

export default Movie
