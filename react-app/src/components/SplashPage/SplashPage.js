import React from 'react';
import SplashSignupModal from "./SplashSignupModal";
import './SplashPage.css';
import DemoUserButton from '../auth/DemoUserButton/DemoUserButton';
import SplashLoginModal from './SplashLoginModal';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import About from './Footer/About/About';


const SplashPage = () => {
  const user = useSelector(state => state.session.user)

  if (user) {
    return (<Redirect to="/" />)
  }

  return (
    <div className='splash-wrap'>
      <div className='splash-all-minus-footer'>
        <div className='splash-left'>
          <img className='splash-backdrop' src='https://live.staticflickr.com/65535/52221327933_83fc0d6219_b.jpg' alt='' />
        </div>
        <div className='splash-right'>
          <img className='splash-logo' src={require('../../images/quitter2-removebg-preview.png')} alt="" />
          <p className='splash-slogan'>
            Quitters win
          </p>
          <p className='splash-txt'>
            Join the Quitter community.
          </p>
          <div className='splash-signup-container'>
            <DemoUserButton />
            <div className='splash-border-manipulation'>
              <div className='splash-border'></div>
              <p className='splash-border-or'>or</p>
              <div className='splash-border'></div>
            </div>
            <SplashSignupModal />
          </div>
          <div className='splash-login-and-txt'>
            <p className='splash-login-question'>Already have an account?</p>
            <SplashLoginModal />
          </div>
        </div>
      </div>
      <div className='splash-footer'>
        <Link className='about-link' to="/about">
          <div className='about'>About</div>
        </Link>
        <div id='scroll-container'>
          <div id='scroll-text'>
            Giving up addiction and taking back control in your life isn't easy, but you don't have to do it alone. Join the Quitter community today and share your story.
          </div>
        </div>
      </div>
    </div >
  )
}

export default SplashPage
