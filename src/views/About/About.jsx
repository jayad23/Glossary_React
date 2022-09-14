import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import AboutModal from "../../components/AboutModal/AboutModal"
import {Button} from '@mui/material'
import {useOpenModal} from "../../hooks/useOpenModal"

const About=() => {
    const [name, setName]=useState("")
    const {open, handleOpen, handleClose}=useOpenModal()
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
            <Button size={"large"} variant="contained" color="primary" onClick={handleOpen}>ABRIR MODAL</Button>
            <AboutModal open={open} handleClose={handleClose} />
        </div>
    )
}

export default About