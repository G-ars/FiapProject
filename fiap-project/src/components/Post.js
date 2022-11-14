import React from 'react'
import './Post.css'
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaRegCommentAlt } from 'react-icons/fa';
import { FaShare } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';



function Post() {
    return (
        <div className='post'>
            <div className='post__container'>
                <div className='post__user'>
                    <FaUserCircle className='icon__user'/>
                </div>
                <div className='post__info'>
                    <h3>Username</h3>
                    <p>Timestamp</p>
                </div>
            </div>
            <div className='post__content'>
                <p>Mensagem</p>
                <div className='post__image'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='Image' />
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
