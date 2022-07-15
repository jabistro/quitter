import "./DemoUserButton.css";
import React from 'react'
import * as sessionActions from "../../../store/session";
import { useDispatch } from "react-redux";

const DemoUserButton = () => {
    const dispatch = useDispatch();

    const loginDemo = (e) => {
        e.preventDefault();
        const email = "demo@aa.io";
        const password = "password";

        return dispatch(sessionActions.login(email, password));
    }
    return (
        <button className="splash-demo-login-btn" onClick={loginDemo}>
            <img className="demo-btn-logo" src={require("../../../images/app-academy-logo.png")} />
            <p className="demo-btn-txt">Log in with demo user</p>
        </button>
    )
}

export default DemoUserButton
