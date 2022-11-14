import React from 'react';
import './Header.css'
import logo from '../assets/logo.png';
import { FaHome } from 'react-icons/fa';
import { FaStore } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';


export default function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} className="logo" alt="Logo" title="Logo" />
            </div>
            <div>
                <FaHome className='icon__header' />
                <FaStore className='icon__header' />
            </div>
            <div className='div__profile'>
                <div>
                    <FaUserAlt className='icon__header' />
                </div>
                <div className='user__header'>
                    <span>Username</span>
                </div>
            </div>
        </div>
    )
}

