import React from 'react'

const ListOfUsers = ({ info }) => {
    console.log("CHILD 3")
  return (
    <div>
        <h1>ListOfUsers:</h1>
        <p>{info.name} {info.surname}</p>
    </div>
  )
}

export default React.memo(ListOfUsers)