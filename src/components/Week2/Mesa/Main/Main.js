import React from 'react'
import { pokemonData } from "../../../../assets/data/pokemonData";
import Card from '../Card/Card';
import "./styles.css";
import documentoMesa from "../Mesa_Integradora.pdf";

const Main = () => {
    const pokemonTypes = Object.keys(pokemonData);
    
    return (
        <div>
            <h1 style={title}>Desarrollo de Mesa Integradora.</h1>
            <a 
                href={documentoMesa} 
                className='pStyles'
                download='Actividad_Mesa'
                >
                    Descargar archivo pdf
            </a>
            <section style={cardStyles}>
                {
                    pokemonTypes.map((type, index) => 
                        <Card 
                            key={index}
                            pokemonType={type}
                            data={pokemonData[type]}
                        />
                    )
                }
            </section>
        </div>
    )
}

export default Main;

const cardStyles = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
    backgroundColor: "#293462", 
    width: "100%",
    paddingBottom: "20px",
    fontFamily: "'Rubik Marker Hatch', cursive",
};

const title = {
    fontFamily: "'Rubik Burned', cursive",
    fontSize: "40px"
}