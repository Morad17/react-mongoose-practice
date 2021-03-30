import React from 'react'
import Blog from '../assets/blog.json'

const Home = (props) => {

    
    return(
        <div>
            {Blog.map((BlogPost, index) => {
              return <div className="">{BlogPost.slug}</div>
            })}
        </div>
    )
}

export default Home