import React from 'react'
import Blog from '../assets/blog.json'
import Hero from '../components/hero'
import Sidebar from '../components/sidebar'
import data from '../assets/blog.json'
import Navbar from '../components/navbar'

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
                <Sidebar />
                <div className="">
                    {Blog.map((BlogPost, index) => {
                    return <div className="">{BlogPost.slug}</div>
                    })}
                </div>
            </div>
        )}
}

export default Home;