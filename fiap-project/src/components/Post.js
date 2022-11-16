import React from 'react'
import './Post.css'
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaRegCommentAlt } from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { Avatar } from '@material-ui/core'


function Post({ profilePic, image, username, timestamp, message}) {
    return (
        <div className='post'>
            <div className='post__container'>
                <div className='post__user'>
                <Avatar
                    src = {profilePic}
                    className = "post__avatar"
                />
                </div>
                <div className='post__info'>
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className='post__content'>
                <p>{message}</p>
                <div className='post__image'>
                    <img src={image} alt='Image' />
                </div>

                <div className='post__container--options'>
                    <div className='post__options'>
                        <FaRegThumbsUp />
                        <p>Like</p>
                    </div>

                    <div className='post__options'>
                        <FaRegCommentAlt />
                        <p>Comment</p>
                    </div>

                    <div className='post__options'>
                        <FaShare />
                        <p>Share</p>
                    </div>

                    <div className='post__options'>
                        <FaUserCircle />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
