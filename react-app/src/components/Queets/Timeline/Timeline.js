import React from 'react';
import { useSelector } from 'react-redux';
import './Timeline.css';


const Timeline = () => {

    const queets = useSelector(state => state.queet)
    const queetsArr = Object.values(queets);

    return (
        <div>
            <h1>I'm still a timeline</h1>
            {queetsArr.map(queet => {
                return (
                    <div>
                        <div>{queet.content}</div>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export default Timeline
