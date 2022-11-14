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
            <div class="box-1">
                <div class="btn btn-one">
                    <FaHome />
                    <span>Home</span>
                </div>
            </div>

            <div class="box-1">
                <div class="btn btn-one">
                    <FaBuffer />
                    <span>My Posts</span>
                </div>
            </div>

            <div class="box-1">
                <div class="btn btn-one">
                    <FaRegBookmark />
                    <span>Favorited Posts</span>
                </div>
            </div>

            <div class="box-1">
                <div class="btn btn-one">
                    <FaRegComments />
                    <span>My contact</span>
                </div>
            </div>

            <div class="box-1">
                <div class="btn btn-one">
                    <FaRegFileAlt />
                    <span>About</span>
                </div>
            </div>
        </aside>
    )
}

export default sidebar
