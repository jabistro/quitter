import './Sidebar.css';
import React from 'react'
import { HiOutlineUserGroup } from 'react-icons/hi';
import { FaHashtag } from 'react-icons/fa';
import { FiBell } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiBookmark } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SidebarQueetModal from './SidebarQueetModal';


const Sidebar = () => {

  const sessionUser = useSelector(state => state.session.user)
  return (
    <div className='sidebar-wrap'>
      <div className='sidebar-first-half'></div>
      <div className='sidebar-second-half'>
        <img className='logo' src={require('../../../images/quitter2-removebg-preview.png')} alt="" />
        <Link className='sidebar-home-link' to='/'>
          <div className='icon-wrap'>
            <HiOutlineUserGroup className='icons' />
            <p className='icon-text'>Home</p>
          </div>
        </Link>
        <div className='icon-wrap'>
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
        </div>
        <Link className='sidebar-profile-link' to={`/users/${sessionUser.id}`}>
          <div className='icon-wrap'>
            <BsPerson className='icons' />
            <p className='icon-text'>Profile</p>
          </div>
        </Link>
        <SidebarQueetModal className="sidebar-add-queet-length" />
      </div>
    </div>
  )
}

export default Sidebar
