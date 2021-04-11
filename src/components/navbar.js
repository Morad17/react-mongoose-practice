import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import '../assets/scss/base.scss'

const Navbar = (props) => {
    return(
           <header className="header row">
                <nav className="main-nav">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">Contact Me</a></li>
                    </ul>
                    <ul>
                        <li><div className="">
                        Socials
                    </div></li>
                    </ul>    
                </nav>
            </header>
    )
}

    export default Navbar
