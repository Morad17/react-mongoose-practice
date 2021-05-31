import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from'axios'

import BlogCard from './blogCard'

/**
* @author
* @class BlogList
**/
class BlogList extends Component {
  constructor(props) {
    super(props);

    this.deleteBlogPost = this.deleteBlogPost.bind(this)

    this.state = {blogposts: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/blogposts/')
      .then(response => {
        this.setState({ blogposts: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  deleteBlogPost(id) {
    axios.delete('http://localhost:5000/blogposts/'+id)
      .then(res => console.log(res.data));
    this.setState({
      blogposts: this.state.blogposts.filter(el => el._id !== id)
    })
  }

  blogList() {
    return this.state.blogposts.map(currentBlogPost => {
      return <BlogCard blogpost={currentBlogPost} deleteBlogPost={this.deleteBlogPost} key={currentBlogPost._id} />
    })
  }


  render() {
    return(
    <div>
        {this.blogList()}
    </div>
      )
    }
 }


export default BlogList