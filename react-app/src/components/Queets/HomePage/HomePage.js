import React from 'react'
import { useSelector } from 'react-redux';

import SplashPage from '../../SplashPage/SplashPage';
import TimelineAllQueets from '../Timeline/TimelineAllQueets';

import './HomePage.css'

const HomePage = () => {

    const sessionUser = useSelector(state => state.session.user);

    return (
        <>
            {sessionUser ?
                <TimelineAllQueets /> : <SplashPage />
            }
        </>
    )
}

export default HomePage
