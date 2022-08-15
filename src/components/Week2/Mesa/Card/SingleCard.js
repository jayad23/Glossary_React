import React from 'react'

const bgPicker = (value) => {
    switch (value) {
        case "electric":
            return "#FFC600";
        case "fire":
            return "#FF0000";
        case "water":
            return "#99FEFF";
        case "rock":
            return "#748DA6"
        default:
            break;
    }
}

const SingleCard = ({avatar, name, type}) => {
    const singleCardContainer = {
        backgroundColor: bgPicker(type),
        width: "300px",
        borderRadius: "20px",
        padding: "20px",
        marginTop: "10px"

    };
    
    const avatarStyles = {
        width: "200px"  
    }

    const nameStyles = {
        color: bgPicker(type === "electric" ? "fire" : type === "rock" ? "water" : type === "fire" ? "electric" : type === "water" ? "rock" : ""),
        fontFamily: "'Press Start 2P', cursive",
        fontWeight: "bolder"
    }

    return (
        <div style={singleCardContainer}>
            <img 
                style={avatarStyles}
                src={avatar} 
                alt={name}/>
            <h1 style={nameStyles}>{name}</h1>
        </div>
    )
}

export default SingleCard