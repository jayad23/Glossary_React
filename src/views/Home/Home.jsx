import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Home=() => {
    const [data, setData]=useState(null);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(res => setData(res.data.results))
    }, [])

    return (
        <div>
            {
                data&&data.map(char => (
                    <div key={char.id}>
                        <img src={char.image} alt={char.name} />
                        <p>{char.name}</p>
                        <Link to={`/character/${char.id}`} >Ver información del personaje</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default Home