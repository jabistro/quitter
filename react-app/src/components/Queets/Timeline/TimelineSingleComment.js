import './TimelineSingleComment.css';
import React from 'react'
import SideBar from './Sidebar/Sidebar';
import Widgets from './Widgets/Widgets';
import SingleComment from './Comments/SingleComment';

const TimelineSingleComment = () => {
    return (
        <div className='timeline-single-comment-wrap'>
            <SideBar />
            <SingleComment />
            <Widgets />
        </div>
    )
}

export default TimelineSingleComment
