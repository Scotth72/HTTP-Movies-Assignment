import React, { useState, useEffect } from 'react';
import axios from 'axios';



const MovieForm = props => {
    console.log("testing for props", props)

    const [currMovie, setCurrMovie] = useState({
        id: Date.now(),
        title: '',
        director: '',
        metascore: 0,
        stars: [],
    })



    const handleChange = e => {

    }

    return (
        <form>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name=" title" placeholder="title" onChange={handleChange} />

            <label htmlFor="director">Director</label>
            <input type="text" id="director" name="director" placeholder="director" onChange={handleChange} />

            <label htmlFor="metascore">Metascore</label>
            <input type="text" id="metascore" name="metascore" placeholder="metascore" onChange={handleChange} />

            <button type="submit">Edit</button>



        </form>
    )
}

export default MovieForm;