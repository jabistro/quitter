import React from 'react';
import { useSelector } from 'react-redux';
import Feed from './Feed/Feed';
import SideBar from './Sidebar/Sidebar';
import './Timeline.css';


const Timeline = () => {

    // const queets = useSelector(state => state.queet)
    // const queetsArr = Object.values(queets);

    return (
        <div>
            <SideBar />
            <Feed />
        </div>
    )
}

export default Timeline
