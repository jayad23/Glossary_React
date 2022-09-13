import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Loader} from '../../components/Loader/Loader'
import {Container} from "../../gralStyledComponents/gralStyledComponents";
import CardList from '../ListofCards/CardList';
import {useFetchDataGithub} from "../../hooks/useFetchDataGithub"
const url="https://api.github.com/users";

const Home=({setAuthenticated}) => {
    const {data, isLoading, error}=useFetchDataGithub(url)

    return (
        <>
            <Container>
                {
                    isLoading? (
                        <Loader />
                    ):(
                        data&&data.map(char => (
                            <CardList key={char.id} char={char} />
                        ))
                    )
                }
            </Container>
        </>
    )
}

export default Home