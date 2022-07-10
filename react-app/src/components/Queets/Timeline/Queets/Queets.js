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

    // const user = queetsArr.filter(queet => queet.userId === )

    return (
        <div className="queets-wrap">
            {latestQueets.map(queet => {
                console.log(queet.createdAt)
                return (
                    <div key={queet.id} className="queets">
                        <Link className="queet-link" to={`/queets/${queet.id}`}>
                            <div className="username">@{usersArr[queet.userId - 1].username}</div>
                            <div className="queet">{queet.content}</div>
                            {/* <TimeAgo
                                className="timestamp"
                                date={queet.createdAt}
                            /> */}
                        </Link>
                        {queet.userId === sessionUser.id &&
                            <button className="edit-queet-btn" onClick={() => editHandler(queet)}>Edit</button>
                        }
                    </div>
                )
            })}
        </div >
    )
}

export default Queets
