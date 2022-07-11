import "./Widgets.css";
import React from 'react'
import { FiSearch } from 'react-icons/fi';


const Widgets = () => {
    return (
        <div className="widget-wrap">
            <div className="widget-first-half">
                <div className="search-wrap">
                    <FiSearch className="search-icon" />
                    <input className="search-input" type="text" placeholder="Search Quitter"></input>
                </div>
            </div>
            <div className="widget-second-half"></div>
        </div>
    )
}

export default Widgets
