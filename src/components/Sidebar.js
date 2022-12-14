import React from 'react'
import './Sidebar.css'
import { FaHome } from 'react-icons/fa';
import { FaBuffer } from 'react-icons/fa';
import { FaRegBookmark } from 'react-icons/fa';
import { FaRegComments } from 'react-icons/fa';
import { FaRegFileAlt } from 'react-icons/fa';

function sidebar() {
    return (
        <aside className='sidebar'>
            <div className="box-1">
                <div className="btn btn-one">
                    <FaHome />
                    <span>Home</span>
                </div>
            </div>

            <div className="box-1">
                <div className="btn btn-one">
                    <FaBuffer />
                    <span>My Posts</span>
                </div>
            </div>

            <div className="box-1">
                <div className="btn btn-one">
                    <FaRegBookmark />
                    <span>Favorited Posts</span>
                </div>
            </div>

            <div className="box-1">
                <div className="btn btn-one">
                    <FaRegComments />
                    <span>My contact</span>
                </div>
            </div>

            <div className="box-1">
                <div className="btn btn-one">
                    <FaRegFileAlt />
                    <a className='link__btn' href="https://github.com/G-ars/FiapProject" target='_blank'>GitHub</a>
                </div> 
            </div>
        </aside>
    )
}

export default sidebar
