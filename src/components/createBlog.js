import React, { Component } from 'react'
import axios from 'axios'

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

class CreateBlog extends Component {
 constructor(props){
   super(props);
   
   this.onChangeUsername = this.onChangeUsername.bind(this)
   this.onChangeBlogTitle = this.onChangeBlogTitle.bind(this)
   this.onChangeMainContent = this.onChangeMainContent.bind(this)
   this.onChangeDate = this.onChangeDate.bind(this)
   this.onChangeBlogType = this.onChangeBlogType.bind(this)
   this.onChangeCategory = this.onChangeCategory.bind(this)
   this.onSubmit = this.onSubmit.bind(this)
   this.appendMe = this.appendMe.bind(this)

   this.state = {
     username: '',
     blogTitle: '',
     mainContent: '',
     blogType: '',
     category: '',
     date: new Date(),
     featured: false,
     users: []
   }
 }

componentDidMount() {
  axios.get('http://localhost:5000/users/')
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

onChangeBlogType(e) {
  this.setState ({
    blogType: e.target.value
  });
}

onChangeCategory(e) {
  this.setState ({
    category: e.target.value
  });
}

onChangeDate(date) {
  this.setState ({
    date: date
  });
}


onSubmit (e) {
  e.preventDefault();

  const blog = {
    username: this.state.username,
    blogTitle: this.state.blogTitle,
    mainContent: this.state.mainContent,
    blogType: this.state.blogType,
    category: this.state.category,
    date: this.state.date,
    featured: false, 
  }

  console.log(blog)
  console.log(blog.date)

  axios.post('http://localhost:5000/blogs/add', blog)
    .then(res => console.log(res.data));

    window.location ='/'
}

appendMe() { 
  let addDiv = document.createElement('P')
  let codeBox = document.getElementById('playground-wrapper')
  let appendedDiv = codeBox.appendChild(addDiv)

  return appendedDiv
}

 render() {
  
  

  return(
    <div className="create-blog-row">
      <h2 class="create-blog-heading">Create Blog Post</h2>
      <hr />
      {/* Form for submitting post */}
      <div className="create-blog-form">
        <div className="live-provider">
            <div className="playground-header">
              <h3 className="center">Live Content Viewer</h3>
            </div>
            <LiveProvider  code="<div id='playground-wrapper' className='playground-wrapper'></div>">
              <div className="">
                <div className="toolbar">
                  <button onClick={this.appendMe}>
                    Divider
                  </button>
                </div>
              </div>
              <LiveEditor className="live-editor" style={{ color:"red !important",opacity:"1 !important", fontWeight:"bold !important" }}/>
              <LiveError className="live-error"/>
              <hr/>
              <LivePreview className="live-preview" id="live-preview"></LivePreview>
            </LiveProvider>
        </div>

      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select ref="userInput" required className="form-control" value={this.state.username} onChange={this.onChangeUsername}>
            <option type="text" value="" className="default-value">Select Username</option>
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
          <label>Blog Type</label>
          <select name="select-blogType" onChange={this.onChangeBlogType} required>
            <option type="text" className="form-control default-value" value="" >Select Blog Type</option>
            <option type="text" className="form-control" value='Journal' >Journal</option>
            <option type="text" className="form-control" value='Article' >Article</option>
            <option type="text" className="form-control" value='Tutorial' >Tutorial</option>
          </select>
        </div>
        <div className="form-group">
          <label>Category</label>
          <select name="select-category" onChange={this.onChangeCategory} required >
            <option type="text" className="form-control default-value" value="" >Select Category</option>
            <option type="text" className="form-control" value='Html' >HTML</option>
            <option type="text" className="form-control" value='Css' >CSS</option>
            <option type="text" className="form-control" value='Javascript' >JAVACRIPT</option>
            <option type="text" className="form-control" value='React' >REACT</option>
            <option type="text" className="form-control" value='Python' >PYTHON</option>
            <option type="text" className="form-control" value='Database' >DATABASE</option>
            <option type="text" className="form-control" value='Other' >OTHER</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date Created: </label>
          <div className="">
            <DatePicker selected={this.state.date} onChange={this.onChangeDate} dateFormat="dd/MM/yyyy" />
          </div>
        </div>
        <div className="form-group">
          <label>Main Content </label>
            <input type="text" className="form-control" value={this.state.mainContent} onChange={this.onChangeMainContent} />
        </div>
        <div className="form-group">
          <input type="submit" value="Create Blog" className="btn btn-primary" />
        </div>
      </form>
      </div>
    </div>
    )
   }
 }


export default CreateBlog