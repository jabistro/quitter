import React from 'react';
import Feed from './Feed/Feed';
import SideBar from './Sidebar/Sidebar';
import './TimelineAllQueets.css';
import Widgets from './Widgets/Widgets';


const TimelineAllQueets = () => {
    return (
        <div className='timeline-wrap'>
            <SideBar />
            <Feed className='timeline-feed' />
            <Widgets />
        </div>
    )
}

export default TimelineAllQueets
