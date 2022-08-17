import React, { useState } from 'react'
import clsx from 'clsx'

const CountFunction = ({ styles }) => {
    const [cuenta, setCuenta] = useState(0);
    const [names, setNames] = useState(["Kike", "Verónica", "Katia", "Daniel"])

    const substraction = () => {
        setCuenta( cuenta - 1)
    }

    const addition = () => {
        setCuenta(prevState => prevState + 1);
        if(cuenta < 1){
            let newName = "Katyana";
            let collectionNames = names.filter((name) => name !== "Kike")
            collectionNames = [newName, ...collectionNames]
            setNames(collectionNames);
        }
    }

    return (
        <>
            <div className={styles['gral-wrapper']}>
                <button
                    onClick={substraction} 
                    className={clsx(styles['btn-gral'], styles['btn-minus'])}
                >-</button>
                <div className={styles['count-title']}>
                    <h1>Count: {cuenta}</h1>
                </div>
                <button 
                    onClick={addition}
                    className={clsx(styles['btn-gral'], styles['btn-plus'])}
                >+</button>
            </div>
            <h1>Nombre: {names[cuenta]}</h1>
        </>
    )
}

export default CountFunction