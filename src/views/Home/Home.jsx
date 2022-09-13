import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Loader} from '../../components/Loader/Loader'
import {Container} from "../../gralStyledComponents/gralStyledComponents";
import CardList from '../ListofCards/CardList';

const Home=({setAuthenticated}) => {
    const [data, setData]=useState(null);
    const [loading, setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get("https://api.github.com/users")
            .then(res => setData(res.data))
            .then(() => setLoading(false))
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <Container>
                {
                    loading? (
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