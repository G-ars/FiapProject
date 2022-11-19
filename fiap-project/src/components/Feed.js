import React, { useEffect, useState } from 'react'
import './Feed.css'
import PostSender from './PostSender'
import Post from './Post'
import db from './firebase'
import { useStateValue } from './StateProvider'
import { FaRecycle } from 'react-icons/fa';


function Feed() {

  const [{ user }, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', "desc")
      .onSnapshot((snapShot) =>
        setPosts(snapShot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        }
        ))))
  }, [])
  return (
    <>
      <div className='title__feed'>
        <h1>Seja bem-vindo, {user.displayName}</h1>
        <p>Você já reciclou hoje? Comece já! <FaRecycle className='recycle__icon' /></p> 
      </div>
      <div className='feed'>
        <PostSender />
      </div>

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
          contact={post.data.contact}
        />
      ))}
    </>

  )
}

export default Feed


