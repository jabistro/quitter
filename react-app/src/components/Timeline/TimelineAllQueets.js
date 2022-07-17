import React from 'react';
import Feed from './Feed/Feed';
import SideBar from './Sidebar/Sidebar';
import './TimelineAllQueets.css';
import Motivations from './Widgets/Motivations/Motivations';
// import SearchBar from './Widgets/SearchBar/SearchBar';


const TimelineAllQueets = () => {
    return (
        <div className='timeline-all-wrap'>
            <div className='timeline-all-left'>
                <SideBar />
            </div>
            <div className='timeline-all-center'>
                <Feed className='timeline-all-feed' />
            </div>
            <div className='timeline-all-right'>
                {/* <SearchBar /> */}
                <Motivations />
            </div>
        </div>
    )
}

export default TimelineAllQueets
