import React, { Component } from 'react'
import axios from'axios'

import BlogCard from './blogCard'

/**
* @author
* @class BlogList
**/
class BlogList extends Component {
  constructor(props) {
    super(props);

    this.deleteBlog = this.deleteBlog.bind(this)
    this.state = {blogs: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/blogs/')
      .then(response => {
        this.setState({ blogs: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  deleteBlog(id) {
    axios.delete('http://localhost:5000/blogs/'+id)
      .then(res => console.log(res.data));
    this.setState({
      blogs: this.state.blogs.filter(el => el._id !== id)
    })
  }

  featuredBlogList() {
    const featBlogs = this.state.blogs

    return( 
      featBlogs.filter(featBlogs => featBlogs.featured === true).map(currentBlog => {
      console.log(this.state.blogs)
      return <BlogCard blog={currentBlog} deleteBlog={this.deleteBlog} key={currentBlog._id} />}
      )
    )
  }

  blogList() {
    return this.state.blogs.map(currentBlog => {
      return <BlogCard blog={currentBlog} deleteBlog={this.deleteBlog} key={currentBlog._id} />
    })
  }


  render() {
    return(
      <div className="">
        <h2 className="featured-heading">Featured Blogs</h2>
        <div className="blogFunctions featuredBlogs">
          {this.featuredBlogList()}
      </div>
      <div className="blogFunctions">
          {this.blogList()}
      </div>
    </div>
      )
    }
 }


export default BlogList