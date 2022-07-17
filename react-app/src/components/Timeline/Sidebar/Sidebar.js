import './Sidebar.css';
import React from 'react'
import { HiOutlineUserGroup } from 'react-icons/hi';
// import { FaHashtag } from 'react-icons/fa';
// import { FiBell } from 'react-icons/fi';
// import { FiMail } from 'react-icons/fi';
// import { FiBookmark } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SidebarQueetModal from './SidebarQueetModal';
import LogoutButton from '../../auth/LogoutButton';
import { MdKeyboardBackspace } from 'react-icons/md';


const Sidebar = () => {

  const sessionUser = useSelector(state => state.session.user)
  const history = useHistory();

  return (
    <div className='sidebar-wrap'>
      <div className='sidebar-first-half'></div>
      <div className='sidebar-second-half'>
        <div className='sidebar-second-half-wrap'>
          <div className='sidebar-second-half-top'>
            <div className='sidebar-second-half-logo-and-back-btn'>
              <img className='logo' src={require('../../../images/quitter2-removebg-preview.png')} alt="" />
              <div onClick={() => history.goBack()} className='sidebar-back-btn-container'>
                <MdKeyboardBackspace className='sidebar-back-btn' />
              </div>
            </div>
            <Link className='sidebar-home-link' to='/'>
              <div className='icon-wrap'>
                <HiOutlineUserGroup className='icons' />
                <p className='icon-text'>Home</p>
              </div>
            </Link>
            {/* <div className='icon-wrap'>
          <FaHashtag className='icons' />
          <p className='icon-text'>Explore</p>
        </div>
        <div className='icon-wrap'>
          <FiBell className='icons' />
          <p className='icon-text'>Notifications</p>
        </div>
        <div className='icon-wrap'>
          <FiMail className='icons' />
          <p className='icon-text'>Messages</p>
        </div>
        <div className='icon-wrap'>
          <FiBookmark className='icons' />
          <p className='icon-text'>Bookmarks</p>
        </div> */}
            <Link className='sidebar-profile-link' to={`/users/${sessionUser.id}`}>
              <div className='icon-wrap'>
                <BsPerson className='icons' />
                <p className='icon-text'>Profile</p>
              </div>
            </Link>
            <div className="sidebar-add-queet-length">
              <SidebarQueetModal />
            </div>
          </div>
          <LogoutButton />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
