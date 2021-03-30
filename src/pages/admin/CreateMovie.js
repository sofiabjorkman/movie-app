import React, { useState } from 'react'
import {Link, useHistory} from "react-router-dom";

function CreateMovie() {
    const [movie, setMovie] = useState({});
    const history = useHistory();


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setMovie({  
            ...movie,
            [name]: value            
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch('http://localhost:5000/movies', {
                method: 'POST', // GET, POST, PATCH, DELETE
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(movie) // body data type must match "Content-Type" header
            });
    
            history.push('/admin')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Create Movie</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" name="movieTitle" onChange={handleChange} value={movie.value}/>
                <input type="text" name="movieYear" onChange={handleChange} value={movie.value}/>
                <input type="text" name="movieGenre" onChange={handleChange} value={movie.value}/>
                <textarea name="movieDescription" onChange={handleChange} cols="30" rows="10" value={movie.value}></textarea>
                <button>Create</button>
                <Link to="/admin">&larr; Back</Link>
            </form>
        </div>
    )
}

export default CreateMovie
