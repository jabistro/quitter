import "./Queets.css";
import { useSelector } from 'react-redux';
import React from 'react'

const Queets = () => {

    const user = useSelector(state => state.session.user);
    const queets = useSelector(state => state.queet);
    const queetsArr = Object.values(queets);
    const latestQueets = [];
    queetsArr.map(queet => {
        latestQueets.unshift(queet);
    })


    return (
        <div className="queets-wrap">
            {latestQueets.map(queet => {
                return (
                    <div key={queet.id} className="queets">
                        <div>{user.username}</div>
                        <div>{queet.content}</div>
                        </div>
                )
            })}
        </div>
    )
}

export default Queets
