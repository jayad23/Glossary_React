import {useState, useEffect} from 'react'
import axios from 'axios';

export const useGetData = (username) => {
    const [userInfo, setUserInfo]=useState(null);

    useEffect(() => {
        axios.get(`https://api.github.com/users/${username}`)
            .then(res => setUserInfo(res.data))
            .catch(err => console.log(err))
    }, [username]);

    return {
        userInfo
    }
}