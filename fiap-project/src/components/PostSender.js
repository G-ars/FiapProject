import React, { useState } from 'react'
import './PostSender.css'
import { FaVideo } from 'react-icons/fa';
import { FaRegImages } from 'react-icons/fa';
import { FaRegGrinAlt } from 'react-icons/fa';




function PostSender() {

    const [input, setInput] = useState('')

    const [image, setImage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='postSender'>
            <div>
                <form>
                    <div className='postSender__form'>
                        <div>
                            User
                        </div>

                        <div>
                            <input 
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className='postSender__input'
                                placeholder='Recicle já, Username!'
                            />

                            <input
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                                className='postSender__input'
                                placeholder='Imagem URL (opcional)'
                            />

                            <button onClick={handleSubmit} type='submit'>Submit</button>
                        </div>
                    </div>
                 
                    <div className='icons__post'>
                        <div>
                            <FaVideo style={{color: 'red'}} />
                            <h3>Live video</h3>
                        </div>

                        <div>
                            <FaRegImages style={{color: 'green'}} />
                            <h3>Insira sua imagem</h3>
                        </div>

                        <div>
                            <FaRegGrinAlt style={{color: 'yellow'}} />
                            <h3>Como esta se sentindo hoje?</h3>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default PostSender
