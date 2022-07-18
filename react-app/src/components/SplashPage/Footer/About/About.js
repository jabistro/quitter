import './About.css';
import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { MdKeyboardBackspace } from 'react-icons/md';
import { Link } from 'react-router-dom';
// import UploadPicture from '../../../ImageUpload/UploadPicture';


const About = () => {
    return (
        <div className='about-wrap'>
            <div className='about-container'>
                <div className='about-back-btn-spacer'>
                    <Link className='about-back-link' to={"/"}>
                        <div className='about-back-btn-container'>
                            <MdKeyboardBackspace className='about-back-button' />
                        </div>
                    </Link>
                </div>
                <div className='about-all-minus-back-btn'>
                    <div className='about-img'></div>
                    <div className='about-blurb'>
                        Quitter was incepted by ex-professional poker player John Allan Hinds.
                        As someone who has seen first hand what addiction can do to a person,
                        he knows how hard it can be for someone to find and get help.
                        <br /><br />He was inspired to create Quitter,
                        a safe place for those either pre or post recovery to share their story and feel a sense of belonging.
                        Everyone can benefit from a helping hand and a shoulder to lean on.
                    </div>
                    <div className='about-both-links'>
                        <a className='about-links' href='https://www.linkedin.com/in/john-allan-hinds-2aba11237/'>Linkedin
                            <BsLinkedin className='about-link' />
                        </a>
                        <a className='about-links' href='https://github.com/jabistro/quitter'>Github
                            <BsGithub className='about-link' />
                        </a>
                    </div>
                    {/* <UploadPicture /> */}
                </div>
            </div>
        </div>
    )
}

export default About
