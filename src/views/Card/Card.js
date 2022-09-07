import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Card = () => {
    const [data, setData]=useState(null);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => setData(res.data))
    }, [id])

    console.log(data);
  return (
    <div>
        <img src={data?.image} alt={data?.name} />
        <p>{data?.name}</p>
        <Link to={"/home"} >Volver</Link>
    </div>
  )
}

export default Card