import React from 'react'
import Movie from '../pages/Movie'

function Movies({movies}) {
    return (
        <div>
            
            <h1>Movies</h1>
            <ul>
                {
                    movies.map( movie => (
                        <Movie key={movie['_id']} movie={movie} />
                    ))
                }
            </ul>
        </div>
    )
}

export default Movies
