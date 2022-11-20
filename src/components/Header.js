import React from 'react';
import './Header.css'
import logo from '../assets/logo.png';
import { FaHome } from 'react-icons/fa';
import { FaStore } from 'react-icons/fa';
import { useStateValue } from './StateProvider'
import userImg from '../assets/user.png'


export default function Header() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} className="logo" alt="Logo" title="Logo" onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = userImg;
                }} />
            </div>
            <div>
                
                <FaHome className='icon__header' />
                <FaStore className='icon__header' />
            </div>
            <div className='div__profile'>
                <div>
                    <img src={user.photoURL} alt='Image' className='post__avatar' />
                </div>
                <div className='user__header'>
                    <span>{user.displayName}</span>
                </div>
            </div>
        </div>
    )
}

