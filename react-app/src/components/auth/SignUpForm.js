import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css';

const SignUpForm = ({ setShowModal }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, displayName));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateDisplayName = (e) => {
    setDisplayName(e.target.value);
  };



  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='signup-wrap'>
      <div className='signup-header'>
        <div className='signup-btn-and-title'>
          <div onClick={() => setShowModal(false)} className='signup-close-btn-container'>
            <AiOutlineClose className='signup-close-btn' />
          </div>
          <p className='signup-title-txt-one'>Become a quitter</p>
          <p className='signup-title-txt-two'>(all fields required)</p>
        </div>
        <button className='signup-submit-btn' type='submit'>Sign Up</button>
      </div>
      <form className='signup-form' onSubmit={onSignUp}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className='signup-field-container'>
          <label className='signup-label'>Display Name</label>
          <input
            className='signup-input'
            type='text'
            name='display_name'
            onChange={updateDisplayName}
            value={displayName}
          ></input>
        </div>
        <div className='signup-field-container'>
          <label className='signup-label'>User Name</label>
          <input
            className='signup-input'
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className='signup-field-container'>
          <label className='signup-label'>Email</label>
          <input
            className='signup-input'
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className='signup-field-container'>
          <label className='signup-label'>Password</label>
          <input
            className='signup-input'
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className='signup-field-container'>
          <label className='signup-label'>Repeat Password</label>
          <input
            className='signup-input'
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
