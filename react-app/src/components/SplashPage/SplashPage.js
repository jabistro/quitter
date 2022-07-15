import React from 'react';
import SplashSignupModal from "./SplashSignupModal";
import './SplashPage.css';
import DemoUserButton from '../auth/DemoUserButton/DemoUserButton';
import SplashLoginModal from './SplashLoginModal';


const SplashPage = () => {
  return (
    <div className='splash-wrap'>
      <div className='splash-all-minus-footer'>
        <div className='splash-left'>
          <img src={require("../../images/splash-backdrop.png")} />
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
        NOT SURE WHAT TO PUT HERE YET
      </div>
    </div >
  )
}

export default SplashPage
