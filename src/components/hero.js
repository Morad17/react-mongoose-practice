import React from 'react';
import Card from './card';
import Navbar from './navbar'

const Hero = (props) => {
    return(
        <div className="">
            <Card style={{ margin:'0 0.7%'}}>
                <div style={{ padding:'50px 0'}}>
                </div>
                <Navbar />
            </Card>
        </div>
    )
}

    export default Hero