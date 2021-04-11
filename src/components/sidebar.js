import React, {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import Card from './card'
import '../assets/scss/base.scss'
import Data from '../assets/blog.json'

const Sidebar = (props) => {


    return(
        <div className="sidebar-container">
            <Card style={{ marginBottom:'20px', padding:'10px', boxSizing:'border-box'}}>
                <div className="card-header">
                    <span>About Us</span>
                    </div>
                    <div className="profile-image">
                    <img src="/images/profile-img.png" alt=""/>
                    </div>
                    <div className="card-body center">
                    <p>Morad El Bouchikhi Senior Developer</p>
                </div>
            </Card>
            <Card>
                <div className="card-header">
                    <span>Social Network</span>
                </div>
            </Card>
            <Card>
                <div className="card-header">
                    <span>Recent posts</span>
                </div>

                <div className="">
                    {Data.map((data, index) => {
                    return  <Card>
                                <div className="blogTitles">{data.blogTitle}</div>
                            </Card>
                    })}
                </div>
            </Card>

        </div>
    )
}

    export default Sidebar