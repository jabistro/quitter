import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import "./LoginForm.css";

const LoginForm = ({ setShowModal }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login-wrap'>
      <div className='login-close'>
        <div onClick={() => setShowModal(false)} className='login-close-btn-container'>
          <AiOutlineClose className='login-close-btn' />
        </div>
      </div>
      <div className='login-everything-minus-close'>
        <img className='login-logo' src={require('../../images/quitter2-removebg-preview.png')} alt="" />
        <p className='login-title-txt'>Sign into Quitter</p>
        <form className='login-form' onSubmit={onLogin}>
          <div className='login-error-container'>
            {errors.map((error, ind) => (
              <div className='login-error' key={ind}>{error}</div>
            ))}
          </div>
          <div className='login-field-container'>
            <label className='login-label' htmlFor='email'>Email</label>
            <input
              className='login-input'
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className='login-field-container'>
            <label className='login-label' htmlFor='password'>Password</label>
            <input
              className='login-input'
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
          </div>
        </form>
        <button onClick={onLogin} className='login-submit-btn' type='submit'>Sign in</button>
      </div>
    </div>
  );
};

export default LoginForm;

{/* <div className='login-wrap'>
  <div className='login-header'>
    <div className='login-btn-and-title'>
      <div onClick={() => setShowModal(false)} className='login-close-btn-container'>
        <AiOutlineClose className='login-close-btn' />
      </div>
      <p className='login-title-txt'>Sign in to Quitter</p>
    </div>
    <button onClick={onLogin} className='login-submit-btn' type='submit'>Login</button>
  </div>
  <form className='login-form' onSubmit={onLogin}>
    <div>
      {errors.map((error, ind) => (
        <div key={ind}>{error}</div>
      ))}
    </div>
    <div className='login-field-container'>
      <label className='login-label' htmlFor='email'>Email</label>
      <input
        className='login-input'
        name='email'
        type='text'
        placeholder='Email'
        value={email}
        onChange={updateEmail}
      />
    </div>
    <div className='login-field-container'>
      <label className='login-label' htmlFor='password'>Password</label>
      <input
        className='login-input'
        name='password'
        type='password'
        placeholder='Password'
        value={password}
        onChange={updatePassword}
      />
    </div>
  </form>
</div> */}
