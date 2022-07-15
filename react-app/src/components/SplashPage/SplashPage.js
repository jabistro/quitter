import React from 'react';
import SplashSignupModal from "./SplashSignupModal";
import './SplashPage.css';


const SplashPage = () => {
  return (
    <div className='splash-wrap'>
      <div className='splash-all-minus-footer'>
        <div className='splash-left'>
          <div className='splash-backdrop'>
          </div>
        </div>
        <div className='splash-right'>
          <div className='splash-logo' />
          <div className='splash-slogan'>
          </div>
          <div className='splash-txt'>
          </div>
          <btn className='splash-demo-btn'>
          </btn>
          <div className='splash-signup-container'>
            <SplashSignupModal />
          </div>
          <div className='splash-login-and-txt'>
            <div className='splash-login-question'>
            </div>
            <div className='splash-login-container'>
            </div>
          </div>
        </div>

      </div>
      <div className='splash-footer'>
      </div>
    </div >
  )
}

export default SplashPage
