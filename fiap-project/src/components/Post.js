import React from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import { FaWhatsappSquare } from 'react-icons/fa';



function Post({ profilePic, image, username, timestamp, message, contact }) {
    return (
        <div className='post'>
            <div className='post__container'>
                <div className='post__user'>
                    <Avatar
                        src={profilePic}
                        className="post__avatar"
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
                    <div className='post__image'>
                        <p><a href="https://api.whatsapp.com/send?phone=55" ><FaWhatsappSquare /> Entre em contato conosco via Whatsapp</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
