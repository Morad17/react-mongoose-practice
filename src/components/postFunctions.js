import React from 'react'
import Card from './card'
import Data from '../assets/blog.json'
import '../assets/scss/base.scss'


const PostFunctions = (props) => {

    let dataTotal = 0

    return(
        <div className="post-functions">
            <Card style={{ width:'98%', display:'flex', justifyContent:'space-between'}}>
                <div className="post-bar">
                <ul className="post-bar-navigation">
                    <li className="total-posts">
                        {Data.forEach(item => {
                            dataTotal += 1;})}
                            {dataTotal}
                    </li>
                    <li>Trending</li>
                    <li className="">Latest</li>
                    <li className="">Category</li>
                </ul>
                <div className="search-bar">
                    <form onSubmit>
                        <input type="text" className="searchClass" placeholder="Search"/>
                        <i onClick className="fas fa-search"></i>
                    </form>
                </div>
                </div>
            </Card>


            {/* <div className="post-div">
                    <img className="new-post-thumb"src="./images/new-post.png" alt=""/><button>New Post</button>
                </div>
                <div className="post-div">
                    <img className="edit-post-thumb"src="./images/edit-post.png" alt=""/><button>Edit Post</button>
                </div> */}
        </div>
    )
}

    export default PostFunctions