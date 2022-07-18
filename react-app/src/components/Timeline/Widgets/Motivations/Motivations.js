import './Motivations.css';
import React from 'react'
import { Quotes } from './Quotes';

const Motivations = () => {
    return (
        <div className='motivations-wrap'>
            <h3 className='motivations-title'>Motivations</h3>
            <div className='motivations-container'>
                <p className='motivations-content'>
                    {Quotes[Math.floor(Math.random() * Quotes.length)]}
                </p>
            </div>
        </div>
    )
}

export default Motivations
