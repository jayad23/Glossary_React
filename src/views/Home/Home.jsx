import React from 'react'
import axios from 'axios'
import {Loader} from '../../components/Loader/Loader'
import {Container} from "../../gralStyledComponents/gralStyledComponents";
import {useGetData} from '../../hooks/useGetData';

const Home=() => {
    const {userInfo}=useGetData("Gigi-U")
    return (
        <Container>
            <h1>Home View</h1>
            <div>
                <img src={userInfo?.avatar_url} alt={userInfo?.name} />
                <h2>{userInfo?.name}</h2>
            </div>
        </Container>
    )
}

export default Home