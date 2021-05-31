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
    <Card prop={props} style={{ width:'calc(25% - .5rem)'}}>
        <img className="blogCard-image" src="images/blog-template.jpg" alt="" />
        <h2>{props.blogpost.blogTitle}</h2>
        <p>{props.blogpost.language}</p>
        <p>{props.blogpost.username},{props.dateCreated}</p>
        <div className="row">
            <div className="col">
            <Link to={"/edit/"+props.blogpost._id}>edit</Link>| <a href="#" onClick={() => { props.deleteBlogPost(props.blogpost._id) }}>delete</a>
      </div>
    </div>
    </Card>
   )
  }


export default BlogCard