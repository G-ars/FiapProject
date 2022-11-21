import React from 'react'
import Sidebar from './Sidebar';
import Feed from './Feed';
import './Container.css';
import GetApi from './GetApi';


function Container() {

    return (

        <div className='home__grid'>
            <div className='grid__one'>
                <Sidebar />
            </div>
            <div className='grid__two'>
                <Feed />
            </div>
            <div className='grid__three'>
                <GetApi />
            </div>
        </div>
    )
}

export default Container
