import React from 'react'
import Sidebar from './Sidebar';
import Feed from './Feed';
import './Container.css';

function Container() {

    return (
        
        <div className='home__grid'>
            <div className='grid__one'>
                <Sidebar />
            </div>
            <div className='grid__two'>
                <Feed />
            </div>
        </div>
    )
}

export default Container
