import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

/**
* @author
* @class EditBlog
**/

class EditBlog extends Component {
 constructor(props){
   super(props);
   
   this.onChangeUsername = this.onChangeUsername.bind(this)
   this.onChangeBlogTitle = this.onChangeBlogTitle.bind(this)
   this.onChangeMainContent = this.onChangeMainContent.bind(this)
   this.onChangeBlogType = this.onChangeBlogType.bind(this)
   this.onChangeCategory = this.onChangeCategory.bind(this)
   this.onChangeDate = this.onChangeDate.bind(this)
   this.onSubmit = this.onSubmit.bind(this)

   this.state = {
     username: '',
     blogTitle: '',
     mainContent: '',
     blogType: '',
     category: '',
     date: new Date(),
     users: []
   }
 }

componentDidMount() {
  axios.get('http://localhost:5000/blogs/'+this.props.match.params.id)
    .then(response => {
      this.setState({
        username: response.data.username,
        blogTitle: response.data.blogTitle,
        mainContent: response.data.mainContent,
        blogType: response.data.blogType,
        category: response.data.category,
        date: new Date(response.data.date)
      })
    })
    .catch(function (error) {
      console.log(error);
    })

  axios.get('http://localhost:5000/users/')
    .then(response => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map(user => user.username),
        })
      }
    })
}

/*----Blog Post Variable Handlers ---*/
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

onSubmit(e) {
  e.preventDefault();


  const blog = {
    username: this.state.username,
    blogTitle: this.state.blogTitle,
    mainContent: this.state.mainContent,
    blogType: this.state.blogType,
    category: this.state.category,
    date: this.state.date
  }

  console.log(blog)

  axios.post('http://localhost:5000/blogs/update/'+ this.props.match.params.id, blog)
    .then(res => console.log(res.data));

  window.location = '/';
}

 render() {
  return(
    <div className="edit-blog-row">
      <h2 class="edit-blog-heading">Edit Blog Post</h2>
      <hr />
      <div className="edit-blog-form">
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select ref="userInput" required className="form-control" value={this.state.username} onChange={this.onChangeUsername}>
            <option disabled="true" >Username</option>
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
          <select name="select-blogType"  onChange={this.onChangeBlogType}>
            <option type="text" className="form-control" value={'Journal'} >Journal</option>
            <option type="text" className="form-control" value={'Article'} >Article</option>
            <option type="text" className="form-control" value={'Tutorial'} >Tutorial</option>
          </select>
        </div>
        <div className="form-group">
          <label>Category</label>
          <select name="select-category" onChange={this.onChangeCategory}>
            <option type="text" className="form-control" value={this.state.category} >HTML</option>
            <option type="text" className="form-control" value={this.state.category} >CSS</option>
            <option type="text" className="form-control" value={this.state.category} >JAVACRIPT</option>
            <option type="text" className="form-control" value={this.state.category} >REACT</option>
            <option type="text" className="form-control" value={this.state.category} >PYTHON</option>
            <option type="text" className="form-control" value={this.state.category} >DATABASE</option>
            <option type="text" className="form-control" value={this.state.category} >OTHER</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date Created: </label>
          <div className="">
            <DatePicker selected={this.state.date} onChange={this.onChangeDate} dateFormat="dd/MM/yyyy" />
          </div>
        </div>
        
        <div className="form-group">
          <input type="submit" value="Edit Blog" className="btn btn-primary" />
        </div>
      </form>
      </div>
    </div>
    )
   }
 }

export default EditBlog