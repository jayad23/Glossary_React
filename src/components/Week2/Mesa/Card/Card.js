import React from 'react'
import SingleCard from './SingleCard'

const Card = ({pokemonType, data}) => {
    
    return (
        <div>
            {
                data.map(pokemonInfo =>
                    <SingleCard 
                        key={pokemonInfo.id}
                        name={pokemonInfo.pokemonName}
                        avatar={pokemonInfo.avatar}
                        type={pokemonType}
                    />
                )
            }
        </div>
    )
}

export default Card