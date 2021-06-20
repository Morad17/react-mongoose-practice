import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Hero from '../components/hero'
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'

import CreateBlog from '../components/createBlog'
import CreateUser from '../components/createUser'
import EditBlog from '../components/editBlog'
import BlogList from '../components/blogList'

class Home extends React.Component {

    constructor(props){
        super(props)
        this.state= {}
    }
    render(){ 
        return(    
            <div>
                <Router>

                    <Navbar />
                    <Hero />
                    <div className="row content">
                        <div className="blogHome">
                            <Route path="/" exact component={BlogList} />
                            <Route path="/edit/:id" component={EditBlog} />
                            <Route path="/create" component={CreateBlog} />
                            <Route path="/user" component={CreateUser} />
                        </div>
                    <Sidebar />
                    </div>
                    
                </Router>
            </div>
        )}
}

export default Home;