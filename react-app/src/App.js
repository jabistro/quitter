import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import { getQueets } from './store/queets';
import { getComments } from './store/comments';
import loader from "./images/loading.gif";
import HomePage from './components/Queets/HomePage/HomePage';
import EditQueet from './components/Queets/Timeline/Queets/EditQueet';
import EditComment from './components/Queets/Timeline/Comments/EditComment';
import { getUsers } from './store/users';
import TimelineSingleQueet from './components/Queets/Timeline/TimelineSingleQueet';
import TimelineSingleComment from './components/Queets/Timeline/TimelineSingleComment';

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
    return <img className="loading" src={loader} alt="loader" />;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
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
