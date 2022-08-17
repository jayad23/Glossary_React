//Paso 1: Importar la clase Component de React.
import React, { Component } from 'react'
import clsx from 'clsx'

class CounterClass extends Component {

    constructor(){
        super()
        this.state = {
            cuenta: 0,
            names: ["Kike", "Verónica", "Katia", "Daniel"],
            isLoaded: false
        }
    }

    substraction = () => {
        this.setState({ cuenta: this.state.cuenta - 1 })
    }

    addition = () => {
        this.setState(prevState => ({cuenta: prevState.cuenta + 1}))
    }

    render(){
        return(
            <>
                <div className={this.props.styles['gral-wrapper']}>
                    <button 
                        onClick={this.substraction}
                        className={clsx(this.props.styles['btn-gral'], this.props.styles['btn-minus'])}
                    >-</button>
                    <div className={this.props.styles['count-title']}>
                        <h1>Count: {this.state.cuenta}</h1>
                    </div>
                    <button 
                        onClick={this.addition}
                        className={clsx(this.props.styles['btn-gral'], this.props.styles['btn-plus'])}
                    >+</button>
                </div>
                <h1>{this.state.names[this.state.cuenta]}</h1>
            </>
        )
    }
}

export default CounterClass
