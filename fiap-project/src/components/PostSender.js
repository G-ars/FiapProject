import React, { useState } from 'react'
import './PostSender.css'
import { FaVideo } from 'react-icons/fa';
import { FaRegImages } from 'react-icons/fa';
import { FaRegGrinAlt } from 'react-icons/fa';

import db from './firebase'
import firebase from './firebase'
import { useStateValue } from './StateProvider'

function PostSender() {
  
    const [{ user }, dispatch] = useStateValue();
    
    const [input, setInput] = useState('')

    const [image, setImage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: image
        })

        setInput('')
        setImage('')
    }

    return (
        <div className='postSender'>
            <div>
                <form>
                    <div className='postSender__form'>
                        <div>
                            <img src = {user.photoURL} alt='Image' className='post__avatar'/>
                        </div>

                        <div>
                            <input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className='postSender__input'
                                placeholder = {`What's on your mind, ${user.displayName} ?`}
                            />

                            <input
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                className='postSender__input'
                                placeholder='Imagem URL (opcional)'
                            />

                            <button onClick={handleSubmit} className="btn__submit" type='submit'>Enviar</button>
                        </div>
                    </div>

                    <div className='icons__post'>
                        <div className='icon__div'>
                            <FaVideo style={{ color: 'red' }} />
                            <h3>Live video</h3>
                        </div>

                        <div className='icon__div'>
                            <FaRegImages style={{ color: 'green' }} />
                            <h3>Insira sua imagem</h3>
                        </div>

                        <div className='icon__div'>
                            <FaRegGrinAlt style={{ color: 'yellow' }} />
                            <h3>Como esta se sentindo hoje?</h3>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default PostSender
