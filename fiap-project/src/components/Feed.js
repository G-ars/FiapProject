import React from 'react'
import './Feed.css'
import PostSender from './PostSender'
import Post from './Post'

function Feed() {
  return (
    <>
      <div className='feed'>
        <PostSender />
      </div>
      <Post/>
    </>

  )
}

export default Feed
