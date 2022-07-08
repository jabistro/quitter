import "./Queets.css";
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import React from 'react'
import AddComment from "../Comments/AddComment";

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
                    <div className="queets">
                        <Link className="queet-link" key={queet.id} to={`/queets/${queet.id}`}>
                            <div>{queet.userId}</div>
                            <div>{queet.content}</div>
                        </Link>
                        {
                            queet.userId === user.id &&
                            <button className="edit-queet-btn" onClick={() => editHandler(queet)}>Edit</button>
                        }
                    </div>
                )
            })}
        </div >
    )
}

export default Queets
