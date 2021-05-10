import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

onChangeDate(e) {
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
   <div>CreateExercise</div>
    )
   }
 }


CreateExercise.propTypes = {}
export default CreateExercise