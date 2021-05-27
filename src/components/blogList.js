import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from'axios'

/**
* @author
* @class BlogList
**/

const BlogPost = props => (
  <div className="container">
    <div className="row">
      <div className="col">Username</div>
      <div className="col">{props.blogpost.username}</div>
    </div>
    <div className="row">
      <div className="col">Blog Title</div>
      <div className="col">{props.blogpost.blogTitle}</div>
    </div>
    <div className="row">
      <div className="col">Main Content</div>
      <div className="col">{props.blogpost.mainContent}</div>
    </div>
    <div className="row">
      <div className="col">Category</div>
      <div className="col">{props.blogpost.category}</div>
    </div>
    <div className="row">
      <div className="col">Language</div>
      <div className="col">{props.blogpost.language}</div>
    </div>
    <div className="row">
      <div className="col">Date Created</div>
      <div className="col">{props.blogpost.dateCreated.substring(0,10)}</div>
    </div>
    <div className="row">
      <div className="col">
        <Link to={"/edit/"+props.blogpost._id}>edit</Link>| <a href="#" onClick={() => { props.deleteBlogPost(props.blogpost._id) }}>delete</a>
      </div>
    </div>
  </div>
)

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
      return <BlogPost blogpost={currentBlogPost} deleteBlogPost={this.deleteBlogPost} key={currentBlogPost._id} />
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