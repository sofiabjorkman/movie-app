import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import MovieList from '../../components/MovieList';
// import Home from '../Home';


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

    const deleteMovie = async (movieID) => {
        try {
            await fetch('http://localhost:5000/movies/' + movieID, {
                method: 'DELETE', // GET, POST, PATCH, DELETE
            });
        } catch (message) {
            throw new Error(message);
        }

        fetchMovies();
    }
    
    return (
        <div>
            <h1>Manage Movies</h1>
            <Link to="/create-movie">Create movie</Link>
            <MovieList movies={movies} deleteMovie={deleteMovie} />
            
        </div>
    )
}

export default ManageMovies
