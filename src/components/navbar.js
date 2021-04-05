import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
    return(
        <div className="navbar">
            <ul className="navigation">
                <li>Home</li>
                <li>About</li>
                <li>Post</li>
                <li>Contacts</li>
            </ul>
            <div className="search-row">
                {/* <form onSubmit={submitSearch}>
                    <input type="text" className={searchClass} placeholder="Search"/>
                    <i onClick={openSearch} className="fas fa-search"></i>
                </form> */}
            </div>
        </div>
    )
}

    export default Navbar
