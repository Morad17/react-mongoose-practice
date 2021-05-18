import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

/**
* @author
* @class CreateExercise
**/

class CreateExercise extends Component {
 constructor(props){
   super(props);
   
   this.onChangeUsername = this.onChangeUsername.bind(this)
   this.onChangeDescription = this.onChangeDescription.bind(this)
   this.onChangeDuration = this.onChangeDuration.bind(this)
   this.onChangeDate = this.onChangeDate.bind(this)
   this.onSubmit = this.onSubmit.bind(this)

   this.state = {
     username: '',
     description: '',
     duration: 0,
     date: new Date(),
     users: []
   }
 }

componentDidMount() {
  this.setState({
    users: ['test user'],
    username: 'test user'
  })
}


 onChangeUsername(e) {
   this.setState ({
     username: e.target.value
   });
 }

 onChangeDescription(e) {
  this.setState ({
    description: e.target.value
  });
}

onChangeDuration(e) {
  this.setState ({
    durtation: e.target.value
  });
}

onChangeDate(date) {
  this.setState ({
    date: date
  });
}

onSubmit (e) {
  e.preventDefault();


  const exercise = {
    username: this.state.username,
    description: this.state.description,
    duration: this.state.duration,
    date: this.state.date
  }

  console.log(exercise)

  window.location = '/';
}

 render() {
  return(
    <div className="">
      <div>CreateExercise</div>
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
          <label>Description</label>
          <input type="text" required className="form-control" value={this.state.description} onChange={this.onChangeDescription} />
        </div>
        <div className="form-group">
          <label>Duration (minutes): </label>
          <input type="text" className="form-control" value={this.state.duration} onChange={this.onChangeDuration} />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div className="">
            <DatePicker selected={this.state.date} onChange={this.onChangeDate} />
          </div>
        </div>
        <div className="form-group">
          <input type="submit" value="Create Exercise" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
   }
 }


CreateExercise.propTypes = {}
export default CreateExercise