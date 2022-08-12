import React from 'react'

const CustomButton = ({ buttonText }) => {
  return (
    <div style={{ marginTop: "20px"}}>
        <button 
            style={{ 
                width: "100%", 
                backgroundColor: "purple", 
                padding: "10px",
                border: "none",
                borderRadius: "6px",
                color:"white",
                fontWeight: "bolder",
                textTransform: "uppercase",
                fontSize: "20px"
            }}>
                { buttonText }
            </button>
    </div>
  )
}

export default CustomButton