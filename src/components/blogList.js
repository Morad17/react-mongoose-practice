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

  blogList() {
    return this.state.blogs.map(currentBlog => {
      return <BlogCard blog={currentBlog} deleteBlog={this.deleteBlog} key={currentBlog._id} />
    })
  }


  render() {
    return(
    <div className="blogFunctions">
        {this.blogList()}
    </div>
      )
    }
 }


export default BlogList