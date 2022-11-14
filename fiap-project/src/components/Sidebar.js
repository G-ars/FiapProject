import React from 'react'
import './Sidebar.css'

function sidebar() {
    return (
        <aside className='sidebar'>
            <div class="box-1">
                <div class="btn btn-one">
                    <span>Home</span>
                </div>
            </div>

            <div class="box-1">
                <div class="btn btn-one">
                    <span>My Posts</span>
                </div>
            </div>

            <div class="box-1">
                <div class="btn btn-one">
                    <span>Favorited Posts</span>
                </div>
            </div>

            <div class="box-1">
                <div class="btn btn-one">
                    <span>My contact</span>
                </div>
            </div>

            <div class="box-1">
                <div class="btn btn-one">
                    <span>About</span>
                </div>
            </div>
        </aside>
    )
}

export default sidebar
