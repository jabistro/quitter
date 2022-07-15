import './TimelineSingleComment.css';
import React from 'react'
import SideBar from './Sidebar/Sidebar';
import Widgets from './Widgets/Widgets';
import SingleComment from './Comments/SingleComment';

const TimelineSingleComment = () => {
    return (
        <div className='timeline-single-comment-wrap'>
            <div className='timeline-single-comment-left'>
                <SideBar />
            </div>
            <div className='timeline-single-comment-center'>
                <SingleComment className='timeline-single-comment-feed' />
            </div>
            <div className='timeline-single-comment-right'>
                {/* <Widgets /> */}
            </div>
        </div>
    )
}

export default TimelineSingleComment
