import React from 'react';
import { Link } from 'react-router-dom'

import Card from './card';
import Navbar from './navbar'
import '../assets/scss/base.scss'


const Hero = (props) => {
    return(
        <div className="row">
            <Card style={{ }}>
                <div style={{ padding:'50px 0'}}>
                    <div className="banner">Hero Banner</div>
                </div>
                <div className="hero-nav">
                <ul className="">
                    <li><a>Home</a></li>
                    <li><a><Link to="/create">Post</Link></a></li>
                    <li><a>About</a></li>
                    <li><a><Link to="/user">User</Link></a></li>
                    <li><a><Link to="/edit/:id">Edit</Link></a></li>
                    <li><a>Contacts</a></li>
                </ul>
                <div className="search-row">
                    {/* <form onSubmit={submitSearch}>
                        <input type="text" className={searchClass} placeholder="Search"/>
                        <i onClick={openSearch} className="fas fa-search"></i>
                    </form> */}
                </div>
                </div>
            </Card>
        </div>
    )
}

    export default Hero