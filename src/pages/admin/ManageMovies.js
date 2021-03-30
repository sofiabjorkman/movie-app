import React, {useState, useEffect} from 'react';
import Movies from '../Movies';

function ManageMovies() {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async() => {
        try {
            const response = await fetch('http://localhost:5000/movies');
            if (!response.ok) {
                throw new Error('HTTP Error! status: ' + response.status);
            }
            const data = await response.json();
            setMovies(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div>
            <h1>Manage Movies</h1>
            <Movies movies={movies} />
        </div>
    )
}

export default ManageMovies
