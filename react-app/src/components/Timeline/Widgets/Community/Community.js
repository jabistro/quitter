import './Community.css';
import React from 'react'
import RandomUser from './RandomUser/RandomUser';

const Community = () => {

    return (
        <div className='community-wrap'>
            <h3 className='community-title'>Community</h3>
            <div className='community-container'>
                <div className='community-content'>
                    <RandomUser />
                </div>
            </div>
        </div>
    )
}

export default Community
