import React from 'react'
import Card from './card'

import '../assets/scss/base.scss'


const PostFunctions = (props) => {

    return(
        <div className="post-functions">
            <Card style={{ width:'33%'}}><img class="new-post-thumb"src="./images/new-post.png" alt=""/><button>New Post</button></Card>
        </div>
    )
}

    export default PostFunctions