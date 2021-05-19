import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from'axios'

/**
* @author
* @class ExerciseList
**/

const Exercise = props => (
  <div className="container">
    <div className="row">
      <div className="col">Username</div>
      <div className="col">{props.exercise.username}</div>
    </div>
    <div className="row">
      <div className="col">Description</div>
      <div className="col">{props.exercise.description}</div>
    </div>
    <div className="row">
      <div className="col">Duration</div>
      <div className="col">{props.exercise.duration}</div>
    </div>
    <div className="row">
      <div className="col">Date</div>
      <div className="col">{props.exercise.date.substring(0,10)}</div>
    </div>
    <div className="row">
      <div className="col">
        <Link to={"/edit/"+props.exercise._id}>edit</Link>| <a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
      </div>
    </div>
  </div>
)

class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ exercises: response.data })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(res => console.log(res.data));
    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id} />
    })
  }


  render() {
    return(
    <div>
        {this.exerciseList()}
    </div>
      )
    }
 }


export default ExerciseList