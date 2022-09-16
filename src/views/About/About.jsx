import React from 'react'
import {useGetData} from "../../hooks/useGetData"

const About=() => {
    const {userInfo}=useGetData("LukaBrc")
    return (
        <div>
            <h1>Vista About</h1>
            <div>
                <img src={userInfo?.avatar_url} alt={userInfo?.name} />
                <h2>{userInfo?.name}</h2>
            </div>
        </div>
    )
}

export default React.memo(About)