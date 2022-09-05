import React from 'react'
import {Link} from 'react-router-dom'

const Home=() => {
    return (
        <div>
            <h1>Vista Home</h1>
            <Link to="/about">Ir a about</Link>
        </div>
    )
}

export default Home