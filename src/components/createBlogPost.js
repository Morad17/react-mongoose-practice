import React, { Component } from 'react'
import axios from 'axios'

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

/**
* @author
* @class CreateBlogPost
**/

class CreateBlogPost extends Component {
 constructor(props){
   super(props);
   
   this.onChangeUsername = this.onChangeUsername.bind(this)
   this.onChangeBlogTitle = this.onChangeBlogTitle.bind(this)
   this.onChangeMainContent = this.onChangeMainContent.bind(this)
   this.onChangeDateCreated = this.onChangeDateCreated.bind(this)
   this.onChangeCategory = this.onChangeCategory.bind(this)
   this.onChangeLanguage = this.onChangeLanguage.bind(TouchList)
   this.onSubmit = this.onSubmit.bind(this)

   this.state = {
     username: '',
     blogTitle: '',
     mainContent: '',
     category: '',
     language: '',
     dateCreated: new Date(),
     users: []
   }
 }

componentDidMount() {
  axios.get('http://localhost:5000/users')
    .then(response => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map(user => user.username),
          username: response.data[0].username
        })
      }
    })
}

/*----Blog Variable Handlers ---*/
 onChangeUsername(e) {
   this.setState ({
     username: e.target.value
   });
 }

 onChangeBlogTitle(e) {
  this.setState ({
    blogTitle: e.target.value
  });
}

onChangeMainContent(e) {
  this.setState ({
    mainContent: e.target.value
  });
}

onChangeCategory(e) {
  this.setState ({
    category: e.target.value
  });
}

onChangeLanguage(e) {
  this.setState ({
    language: e.target.value
  });
}

onChangeDateCreated(dateCreated) {
  this.setState ({
    dateCreated: dateCreated
  });
}

onSubmit (e) {
  e.preventDefault();


  const blogpost = {
    username: this.state.username,
    blogTitle: this.state.blogTitle,
    mainContent: this.state.mainContent,
    dateCreated: this.state.dateCreated,
    language: this.state.language,
    category: this.state.category,
  }

  console.log(blogpost)

  axios.post('http://localhost:5000/blogposts/add', blogpost)
    .then(res => console.log(res.data));

  window.location = '/';
}

 render() {
  return(
    <div className="">
      <div>Create Blog Post</div>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select ref="userInput" required className="form-control" value={this.state.username} onChange={this.onChangeUsername}>
            {this.state.users.map((user)=> {
              return <option key={user} value={user}>
                {user}
              </option>
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Blog Title</label>
          <input type="text" required className="form-control" value={this.state.blogTitle} onChange={this.onChangeBlogTitle} />
        </div>
        <div className="form-group">
          <label>MainContent </label>
          <input type="text" className="form-control" value={this.state.mainContent} onChange={this.onChangeMainContent} />
        </div>
        <div className="form-group">
          <label>Category</label>
          <input type="text" className="form-control" value={this.state.category} onChange={this.onChangeCategory} />
        </div>
        <div className="form-group">
          <label>Language</label>
          <input type="text" className="form-control" value={this.state.language} onChange={this.onChangeLanguage} />
        </div>
        <div className="form-group">
          <label>Date Created: </label>
          <div className="">
            <DatePicker selected={this.state.dateCreated} onChange={this.onChangeDateCreated} />
          </div>
        </div>
        <div className="form-group">
          <input type="submit" value="Create Blog" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
   }
 }


export default CreateBlogPost