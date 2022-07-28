import "./Giphy.css";
import React, { useEffect, useState } from 'react'
import axios from "axios";
import Loader from "../../Loader";

const Giphy = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                const res = await axios("https://api.giphy.com/v1/gifs/trending", {
                    params: {
                        api_key: "GcgRIlx4T3AbP0iLbTySOZZ3T61hmJTF",
                        limit: 10
                    }
                });

                console.log(res);
                setData(res.data.data);

            } catch (err) {
                setIsError(true);
                setTimeout(() => setIsError(false), 4000);
            }



            setIsLoading(false);
        }

        fetchData();
    }, []);

    const renderGifs = () => {
        if (isLoading) {
            return <Loader className="gif-loading" />
        }
        return data.map(el => {
            return (
                <div key={el.id} className="gif">
                    <img className="gif-img" src={el.images.fixed_height.url} alt="" />
                </div>
            )
        })
    }
    const renderError = () => {
        if (isError) {
            return (
                <div>Unable to get GIFs, please try again in a few minutes</div>
            )
        }
    }

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsError(false);
        setIsLoading(true);

        try {
            const res = await axios("https://api.giphy.com/v1/gifs/search", {
                params: {
                    api_key: "GcgRIlx4T3AbP0iLbTySOZZ3T61hmJTF",
                    q: search,
                    limit: 10
                }
            })
            setData(res.data.data);
        } catch (err) {
            setIsError(true);
            setTimeout(() => setIsError(false), 4000);
        }

        setIsLoading(false);
    }

    return (
        <div className="gif-wrap">
            {renderError()}
            <form>
                <input
                    type="text"
                    placeholder="search"
                    className="gif-form-input"
                    onChange={handleSearchChange}
                    value={search}
                />
                <button onClick={handleSubmit} type="submit" className="gif-search-btn">Go</button>
            </form>
            <div className="gif-container">
                {renderGifs()}
            </div>
        </div>
    )
}

export default Giphy
