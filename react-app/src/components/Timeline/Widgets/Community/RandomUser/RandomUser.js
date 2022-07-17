import "./RandomUser.css"
import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const RandomUser = () => {

    const users = useSelector(state => state.user);
    const sessionUser = useSelector(state => state.session.user);
    const usersArr = Object.values(users);
    const otherUsers = usersArr.filter(user => user.id !== sessionUser.id)
    const randomUser = otherUsers[Math.floor(Math.random() * otherUsers.length)]
    return (
        <div className="random-user-wrap">
            <div className="random-user-pfp-and-names">
                <img className="profile-pic" src={randomUser?.profile_pic === '' ? 'https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg' : randomUser?.profile_pic} />
                <div className="random-user-names">
                    <p className="random-user-display-name">{randomUser.display_name}</p>
                    <p className="random-user-username">@{randomUser.username}</p>
                </div>
            </div>
            <Link className="random-user-link" to={`/users/${randomUser.id}`}>
                <button className="random-user-view-btn">
                    <p className="random-user-view-txt">View profile</p>
                </button>
            </Link>
        </div>
    )
}

export default RandomUser
