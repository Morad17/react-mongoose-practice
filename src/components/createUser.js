import React, { Component } from 'react'
import axios from 'axios'

import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

/**
* @author
* @class CreateUser
**/

class CreateUser extends Component {
 constructor(props){
   super(props);
   
   this.onChangeUsername = this.onChangeUsername.bind(this)
   this.onSubmit = this.onSubmit.bind(this)

   this.state = {
     username: ''
   }
 }

componentDidMount() {
  this.setState({
    users: ['test user'],
    username: 'test user'
  })
}

/*----Exercise Variable Handlers ---*/
 onChangeUsername(e) {
   this.setState ({
     username: e.target.value
   });
 }

onSubmit (e) {
  e.preventDefault();


  const user = {
    username: this.state.username,
  }

  console.log(user)

  axios.post('http://localhost:5000/users/add', user)
    .then(res => console.log(res.data));

  this.setState({
    username: ''
})
}

 render() {
  return(
    <div className="">
      <div>CreateUser</div>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input type="text" required className="form-control" value={this.state.username} onChange={this.onChangeUsername} />
        </div>
        <div className="form-group">
          <input type="submit" value="Create Exercise" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
   }
 }


CreateUser.propTypes = {}
export default CreateUser