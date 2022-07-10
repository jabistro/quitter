import "./Queets.css";
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import React from 'react'
// import TimeAgo from 'react-timeago';


const Queets = () => {

    const history = useHistory();
    const users = useSelector(state => state.user.users);
    const usersArr = Object.values(users);
    const sessionUser = useSelector(state => state.session.user);
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
                        <div className="feed-queet-username-and-edit-btn">
                            <Link className="queet-link" to={`/queets/${queet.id}`}>
                                <div className="feed-queet-username">@{usersArr[queet.userId - 1].username}</div>
                            </Link>
                            {queet.userId === sessionUser.id &&
                                <button className="feed-edit-queet-btn" onClick={() => editHandler(queet)}>Edit</button>
                            }
                        </div>
                        <Link className="queet-link" to={`/queets/${queet.id}`}>
                            <div className="feed-queet">{queet.content}</div>
                        </Link>
                        {/* <TimeAgo
                                className="timestamp"
                                date={queet.createdAt}
                            /> */}
                    </div>
                )
            })}
        </div >
    )
}

export default Queets
