import './Sidebar.css';
import React from 'react'
import { GrGroup } from 'react-icons/gr';
import { FaHashtag } from 'react-icons/fa';
import { FiBell } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { FiBookmark } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';


const Sidebar = () => {
  return (
    <div className='sidebar-wrap'>
      <img className='logo' src="https://links.papareact.com/drq" alt="" />
      <div className='icon-wrap'>
        <GrGroup className='icons' />
        <p className='icon-text'>Home</p>
      </div>
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
      <div className='icon-wrap'>
        <BsPerson className='icons' />
        <p className='icon-text'>Profile</p>
      </div>
    </div>
  )
}

export default Sidebar
