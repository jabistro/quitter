import "./Feed.css";
// import { FiRefreshCcw } from 'react-icons/fi';
import React from 'react'
import Queets from "../Queets/Queets";
import AddQueet from "../Queets/AddQueet";

const Feed = () => {
    return (
        <div className="feed-wrap">
            <div className="header-wrap">
                <h2 className="home">Home</h2>
                {/* <FiRefreshCcw className="refresh" /> */}
            </div>
            <AddQueet />
            <Queets />
        </div>
    )
}

export default Feed
