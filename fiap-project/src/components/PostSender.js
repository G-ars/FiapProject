import React, { useState } from 'react'
import './PostSender.css'
import { useStateValue } from './StateProvider'
import db from './firebase'
import firebase from 'firebase'


function PostSender() {

    const [{ user }, dispatch] = useStateValue();

    const [input, setInput] = useState('')

    const [image, setImage] = useState('')

    const [contact, setContact] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: image,
            contact: contact
        })

        setInput('')
        setImage('')
        setContact('')

    }

    return (
        <>
            <div className='postSender'>
                <div>

                    <form>
                        <div className='postSender__form'>
                            <div>
                                <img src={user.photoURL} alt='Image' className='post__avatar' />
                            </div>

                            <div>
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className='postSender__input'
                                    placeholder={`Faça seu post, ${user.displayName}`}
                                />

                                <input
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    className='postSender__input'
                                    placeholder='URL da Imagem'
                                />

                                <input
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                    className='postSender__input'
                                    placeholder='wtp'
                                />


                                <button onClick={handleSubmit} className="btn__submit" type='submit'>Enviar</button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        </>
    )
}

export default PostSender
