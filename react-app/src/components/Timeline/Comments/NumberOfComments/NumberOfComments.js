import './NumberOfComments.css';
import React from 'react'
import { useSelector } from 'react-redux';

const NumberOfComments = ({ queetId }) => {

    const comments = useSelector(state => state.comment);
    const commentsArr = Object.values(comments);
    const numOfComments = commentsArr.filter(comment => comment.queet.id === queetId)

    return (
        <div>{numOfComments.length}</div>
    )
}

export default NumberOfComments
