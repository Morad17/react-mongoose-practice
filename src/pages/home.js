import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Hero from '../components/hero'
import Sidebar from '../components/sidebar'
import data from '../assets/blog.json'
import Navbar from '../components/navbar'
import PostFunctions from '../components/postFunctions'

import CreateBlogPost from '../components/createBlogPost'
import CreateUser from '../components/createUser'
import EditBlogPost from '../components/editBlogPost'
import BlogList from '../components/blogList'

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
                <Router>

                    <Navbar />
                    <Hero />
                    <div className="row content">
                        <div className="blogHome">
                        <PostFunctions />
                            <Route path="/" exact component={BlogList} />
                            <Route path="/edit/:id" component={EditBlogPost} />
                            <Route path="/create" component={CreateBlogPost} />
                            <Route path="/user" component={CreateUser} />
                        </div>
                    <Sidebar />
                    </div>
                    
                </Router>
            </div>
        )}
}

export default Home;