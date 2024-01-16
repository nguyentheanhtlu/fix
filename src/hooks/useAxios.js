import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            try {
                setLoading(true);
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                setError(error);
                alert('Falide');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        
    }, [url]);

    return{
        data,
        error,
        loading

    }
}

export default useAxios;