import "./Feed.css";
import { FiRefreshCcw } from 'react-icons/fi';


import React from 'react'

const Feed = () => {
    return (
        <div>
            <div className="header-wrap">
                <h2 className="home">Home</h2>
                <FiRefreshCcw className="refresh"/>
            </div>
        </div>
    )
}

export default Feed
