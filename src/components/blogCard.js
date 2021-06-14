import React from 'react'
import { Link } from 'react-router-dom'

import Card from './card'
import '../assets/scss/_blog-card.scss'

/**
* @author
* @function BlogCard
**/

const BlogCard = (props) => {
  
  return(
    <div prop={props} className="BlogCard">
        <div className="BlogCard-image">
          <img className="" src="images/blog-template.jpg" alt="" />
        </div>
        <h2 className="BlogCard-title">{props.blog.blogTitle}</h2>
        <div className="BlogCard-text">
          <p>{props.blog.language}</p>
          <p>{props.blog.username},{props.date} {console.log(props.date)}</p>
          <div className="col">
            <Link to={"/edit/"+props.blog._id}><a class="edit-button"href="#">Edit</a></Link> <a class="delete-button"href="#" onClick={() => { props.deleteBlog(props.blog._id) }}>Delete</a>
          </div>
        </div>
    </div>
   )
  }


export default BlogCard