import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/users';

import SplashPage from '../SplashPage/SplashPage';
import TimelineAllQueets from '../Timeline/TimelineAllQueets';

import './HomePage.css'

const HomePage = () => {

    const sessionUser = useSelector(state => state.session.user);

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(getUsers());
        })();
    }, []);

    return (
        <>
            {sessionUser ?
                <TimelineAllQueets /> : <SplashPage />
            }
        </>
    )
}

export default HomePage
