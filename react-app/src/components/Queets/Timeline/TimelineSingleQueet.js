import './TimelineSingleQueet.css';
import React from 'react'
import SideBar from './Sidebar/Sidebar';
import Widgets from './Widgets/Widgets';
import SingleQueet from './Queets/SingleQueet';

const TimelineSingleQueet = () => {
    return (
        <div className='timeline-single-queet-wrap'>
            <SideBar />
            <SingleQueet />
            <Widgets />
        </div>
    )
}

export default TimelineSingleQueet
