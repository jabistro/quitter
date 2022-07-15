import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
// import User from './components/User';
import { authenticate } from './store/session';
import { getQueets } from './store/queets';
import { getComments } from './store/comments';
import loader from "./images/loading.gif";
import EditQueet from './components/Timeline/Queets/EditQueet';
import EditComment from './components/Timeline/Comments/EditComment';
import { getUsers } from './store/users';
import TimelineSingleQueet from './components/Timeline/TimelineSingleQueet';
import TimelineSingleComment from './components/Timeline/TimelineSingleComment';
import HomePage from './components/HomePage/HomePage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import SplashPage from './components/SplashPage/SplashPage';
import './App.css';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      await dispatch(getQueets());
      await dispatch(getComments());
      await dispatch(getUsers());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return <div className='loading-container'><img className="loading" src={loader} alt="loader" /></div>;
  }

  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
        <Route path='/login' exact={true}>
          {/* <LoginForm /> */}
          <SplashPage />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <ProfilePage />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <HomePage />
        </ProtectedRoute>
        <ProtectedRoute path='/queets/edit/:queetId' exact={true} >
          <EditQueet />
        </ProtectedRoute>
        <ProtectedRoute path='/queets/:queetId' exact={true} >
          <TimelineSingleQueet />
        </ProtectedRoute>
        <ProtectedRoute path='/comments/:commentId' exact={true} >
          <TimelineSingleComment />
        </ProtectedRoute>
        <ProtectedRoute path='/comments/edit/:commentId' exact={true} >
          <EditComment />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
