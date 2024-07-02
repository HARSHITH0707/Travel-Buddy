import React from 'react'
import Carousel from './Carousel'
import About from './About'
import Accordian from './Accordian'


const Home = () => {
    return (
        <div className="p-3 mb-2  text-white fadeInUp">
            <Carousel/>
            <About/>
            <Accordian/>
        </div>
    )
}

export default Home
