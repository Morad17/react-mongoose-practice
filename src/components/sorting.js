import React from 'react'

const Sorting = (props) =>{

    return(
        <div className="">
            <button onClick={() => props.sortBy('blogTitle')}>Sort</button>
            { props.data.map(row => (
                <section className="">
                    <div className="row">
                        <div className="col">
                            <h1>{ row.blogCategory}</h1>
                            {console.log(row.blogCategory)}
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