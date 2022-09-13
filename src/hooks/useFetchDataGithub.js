import { useState, useEffect } from "react"
import axios from "axios";

export const useFetchDataGithub = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [ error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        axios.get(url)
        .then(res => setData(res.data))
        .then(() => setIsLoading(false))
        .catch(err => setError(err))
    }, [url]);

    return {
        data,
        isLoading,
        error
    }
}