import "./Queets.css";
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import React from 'react'

const Queets = () => {

    const history = useHistory();
    const user = useSelector(state => state.session.user)
    const queets = useSelector(state => state.queet);
    const queetsArr = Object.values(queets);
    const latestQueets = [];
    queetsArr.map(queet => {
        latestQueets.unshift(queet);
    })

    const editHandler = queet => {
        history.push(`/queets/edit/${queet.id}`)
    }


    return (
        <div className="queets-wrap">
            {latestQueets.map(queet => {
                return (
                    <div key={queet.id} className="queets">
                        <div>{queet.userId}</div>
                        <div>{queet.content}</div>
                        {queet.userId === user.id &&
                            <button className="edit-queet-btn" onClick={() => editHandler(queet)}>Edit</button>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default Queets
