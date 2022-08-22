import React, { Component } from 'react'

class PokeCard extends Component {
    constructor(){
        super()
        this.state = {
            poke_avatar: null,
            pokemon_Data: null,
            index: 1
        }
    }

    request = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.index}`);
        const result = await response.json();
        this.setState({poke_avatar:result.sprites.front_default, pokemon_Data: result })
    }

    componentDidMount(){
        //AQUÍ PONGO LO QUE QUIERO QUE SE EJECUTE EN EL PRIMER RENDER
        this.request();
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.index !== this.state.index){
            this.request();
        }
    }

    render(){
        console.log(this.state.index)
        return(
            <div>
                <h1>Nombre del Pokemón: {this.state.pokemon_Data?.name}</h1>
                <img src={this.state?.poke_avatar} alt="imagen_pokemon"/>

                <button onClick={()=> this.setState(prevState => ({ index: prevState.index - 1}))}>Prev</button>
                <button onClick={()=> this.setState(prevState => ({ index: prevState.index + 1 }))}>Next</button>
                <button onClick={() => this.request()}>Solicitar info a API</button>
            </div>
        )
    }
}

export default PokeCard;

