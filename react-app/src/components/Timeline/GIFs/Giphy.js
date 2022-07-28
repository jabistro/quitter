import "./Giphy.css";
import React, { useEffect, useState } from 'react'
import axios from "axios";

const Giphy = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios("https://api.giphy.com/v1/gifs/trending", {
                params: {
                    api_key: "GcgRIlx4T3AbP0iLbTySOZZ3T61hmJTF"
                }
            });

            console.log(res)
            setData(res.data.data)
        }

        fetchData();
    }, []);

    const renderGifs = () => {

    }

    return (
        <div className="gif-container">{renderGifs()}</div>
    )
}

export default Giphy
