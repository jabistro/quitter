import React from 'react'
import { useSelector } from 'react-redux';

import SplashPage from '../../SplashPage/SplashPage';
import Timeline from '../Timeline/Timeline';

import './HomePage.css'

const HomePage = () => {

    const sessionUser = useSelector(state => state.session.user);

    return (
        <>
        {sessionUser ?
            <Timeline /> : <SplashPage />
        }
        </>
    )
}

export default HomePage
