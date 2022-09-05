import React from 'react'
import {useNavigate} from 'react-router-dom'

const Error=() => {
    const navigate=useNavigate();
    return (
        <div>
            <h1>Esta vista no existe</h1>
            <button onClick={() => navigate("/")}>Ir a página principal</button>
        </div>
    )
}

export default Error