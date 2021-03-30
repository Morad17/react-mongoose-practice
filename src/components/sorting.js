import React from 'react'
import Data from '../assets/blog.json'

const Sorting = (props) =>{
    let Data = Data;

    return(
        <div className="">
            <button onClick={() => props.sortBy('blogTitle')}>Sort</button>
            { props.Data.map(row => (
                <section className="">
                    <div className="row">
                        <div className="col">
                            <h1>{ row.category}</h1>
                        </div>
                        <div className="col">
                            <h1></h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h1></h1>
                        </div>
                        <div className="col">
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h1></h1>
                        </div>
                        <div className="col">
                            <h1></h1>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}

export default Sorting