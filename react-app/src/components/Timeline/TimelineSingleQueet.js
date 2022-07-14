import './TimelineSingleQueet.css';
import React from 'react'
import SideBar from './Sidebar/Sidebar';
import Widgets from './Widgets/Widgets';
import SingleQueet from './Queets/SingleQueet';

const TimelineSingleQueet = () => {
    return (
        <div className='timeline-single-queet-wrap'>
            <div className='timeline-single-queet-left'>
                <SideBar />
            </div>
            <div className='timeline-single-queet-center'>
                <SingleQueet className='timeline-single-queet-feed' />
            </div>
            <div className='timeline-single-queet-right'>
                <Widgets />
            </div>
        </div>
    )
}

export default TimelineSingleQueet
