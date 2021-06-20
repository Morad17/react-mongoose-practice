import React, { Component } from 'react'
import axios from 'axios'

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

class CreateBlog extends Component {
 constructor(props){
   super(props);
   
   this.onChangeUsername = this.onChangeUsername.bind(this)
   this.onChangeBlogTitle = this.onChangeBlogTitle.bind(this)
   this.onChangeMainContent = this.onChangeMainContent.bind(this)
   this.onChangeDate = this.onChangeDate.bind(this)
   this.onChangeCategory = this.onChangeCategory.bind(this)
   this.onChangeLanguage = this.onChangeLanguage.bind(this)
   this.onSubmit = this.onSubmit.bind(this)

   this.state = {
     username: '',
     blogTitle: '',
     mainContent: '',
     category: '',
     language: '',
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
    category: this.state.category,
    language: this.state.language,
    date: this.state.date,
    featured: false, 
  }

  console.log(blog)
  console.log(blog.date)

  axios.post('http://localhost:5000/blogs/add', blog)
    .then(res => console.log(res.data));

    window.location ='/'
}

 render() {
  return(
    <div className="blogFunctions">
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
          <label>Blog Type</label>
          <select name="select-category"  onChange={this.onChangeCategory}>
            <option type="text" className="form-control" value={'Journal'} >Journal</option>
            <option type="text" className="form-control" value={'Article'} >Article</option>
            <option type="text" className="form-control" value={'Tutorial'} >Tutorial</option>
          </select>
        </div>
        <div className="form-group">
          <label>Category</label>
          <select name="select-language" onChange={this.onChangeLanguage}></select>
          <option type="text" className="form-control" value={this.state.language} >HTML</option>
          <option type="text" className="form-control" value={this.state.language} >CSS</option>
          <option type="text" className="form-control" value={this.state.language} >JAVACRIPT</option>
          <option type="text" className="form-control" value={this.state.language} >REACT</option>
          <option type="text" className="form-control" value={this.state.language} >PYTHON</option>
          <option type="text" className="form-control" value={this.state.language} >DATABASE</option>
          <option type="text" className="form-control" value={this.state.language} >OTHER</option>
        </div>
        <div className="form-group">
          <label>Date Created: </label>
          <div className="">
            <DatePicker selected={this.state.date} onChange={this.onChangeDate} dateFormat="dd/MM/yyyy" />
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


export default CreateBlog