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

                {image && image.toString().length > 10 ?
                    <div className='post__image'>
                        <img src={image} alt='Image' />
                    </div> : false   
                }


                <div className='post__container--options'>
                    <h3>Entre em contato:</h3>
                    <div className='post__image'>
                    <a href={`https://web.whatsapp.com/send?phone=55${(contact || '').toString().replace(/\D/g, '')}`} className="link__wpp" title='Whatsapp'><p className='p__contact'><FaWhatsappSquare className='wpp_contact'/>{contact}</p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
