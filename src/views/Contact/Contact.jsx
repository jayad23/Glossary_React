import React from 'react'
import {useLocation} from 'react-router-dom'

const Contact=() => {
    const location=useLocation();

    const {state}=location;
    return (
        <div>
            <h1>Vista Contact</h1>
            <ul>
                <li>Familia</li>
                <li>Amigos</li>
                <li>Compañeros</li>
                <li>{state?.name}</li>
            </ul>
        </div>
    )
}

export default Contact