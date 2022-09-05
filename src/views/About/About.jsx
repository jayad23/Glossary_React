import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const About=() => {
    const [name, setName]=useState("")
    const navigate=useNavigate();

    const handleSubmit=(e) => {
        e.preventDefault();
        navigate("/contact", {state: {name}});
    }
    return (
        <div>
            <h1>Vista About</h1>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='ingresa tu nombre'
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
            <button onClick={() => navigate("/")}>GO BACK</button>
        </div>
    )
}

export default About