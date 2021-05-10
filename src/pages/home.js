import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Blog from '../assets/blog.json'
import Hero from '../components/hero'
import Sidebar from '../components/sidebar'
import data from '../assets/blog.json'
import Navbar from '../components/navbar'
import PostFunctions from '../components/postFunctions'

import CreateExercise from '../components/createExercise'
import CreateUser from '../components/createUser'
import EditExercise from '../components/editExercise'
import ExerciseList from '../components/exerciseList'

class Home extends React.Component {

    constructor(props){
        super(props)
        this.state={
            data:data,
            direction: {

            }
        }
        this.sortBy = this.sortBy.bind(this)
    }

    sortBy(key) {
      this.setState({
        data: data.sort( (a, b) => {
        return (a[key] - b[key] )
                    })
              })}

    render(){ 
        return(    
            <div>
                <Navbar />
                <Hero />
                <div className="row content">
                    <PostFunctions />
                    <Sidebar />
                </div>
                <div className="">
                    <Router>
                        <Route path="/" exact component={ExerciseList} />
                        <Route path="/edit/:id" component={EditExercise} />
                        <Route path="/create" component={CreateExercise} />
                        <Route path="/user" component={CreateUser} />
                    </Router>
                </div>
            </div>
        )}
}

export default Home;