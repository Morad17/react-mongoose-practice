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
        <h2 className="BlogCard-title">{props.blogpost.blogTitle}</h2>
        <div className="row BlogCard-text">
          <p>{props.blogpost.language}</p>
          <p>{props.blogpost.username},{props.dateCreated}</p>
          <div className="col">
            <Link to={"/edit/"+props.blogpost._id}>edit</Link>| <a href="#" onClick={() => { props.deleteBlogPost(props.blogpost._id) }}>delete</a>
          </div>
          </div>
    </div>
   )
  }


export default BlogCard