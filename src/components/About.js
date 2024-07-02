import React from 'react'

const About = () => {
  return (
    <div className="p-3 mb-2  text-primary-emphasis" style={{
            backgroundImage: 'url("data:image/jpeg;base64,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")',
            backgroundSize: 'cover',
            opacity: 0.7
          }}>
      <p>
        <div className="container mt-5" style={{zIndex:'-1',color:'black',fontWeight:'1000'}}>
   
          <div className="row">
            <div className="col-12 text-center" >
              <h1 className="display-4" >About Travel Buddy</h1>
              <p className="lead">Your go-to partner for unforgettable travel experiences around the world.</p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <h2>Our Mission</h2>
              <p>To provide unique, safe, and affordable travel experiences that allow our customers to explore the world without hassles.</p>
            </div>
            <div className="col-md-6">
              <h2>Our Vision</h2>
              <p>To become the world’s most trusted travel company, renowned for our innovative offerings and exemplary customer service.</p>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <h2>What We Offer</h2>
              <p>We specialize in curated travel plans, guided tours, bespoke adventures, and comprehensive travel packages. Discover the beauty of local cultures, cuisines, and landscapes with our expert guides.</p>
            </div>
          </div>

      
          <div className="row mt-4">
            <div className="col-12 my-3">
              <h2>Meet Our Team</h2>
            </div>
      
            <div className="col-md-3" style={{boxShadow:'0 8px 16px 0 rgba(0, 0, 0, 0.5)'}}>
              <div className="card">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Team Member"/>
                  <div className="card-body">
                    <h5 className="card-title">Harshith Sai</h5>
                    <p className="card-text">Student at bvrit</p>
                  </div>
              </div>
            </div>

            <div className="col-md-3" style={{boxShadow:'0 8px 16px 0 rgba(0.2, 0.2, 0.2, 0.5)'}}>
              <div className="card">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Team Member"/>
                  <div className="card-body">
                    <h5 className="card-title">Saikarthik</h5>
                    <p className="card-text">Student at bvrit</p>
                  </div>
              </div>
            </div>

            <div className="col-md-3" style={{boxShadow:'0 8px 16px 0 rgba(0.2, 0.2, 0.2, 0.5)'}}>
              <div className="card">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Team Member"/>
                  <div className="card-body">
                    <h5 className="card-title">Chetan</h5>
                    <p className="card-text">Student at bvrit</p>
                  </div>
              </div>
            </div>
            <div className="col-md-3" style={{boxShadow:'0 8px 16px 0 rgba(0, 0, 0, 0.5)'}}>
              <div className="card">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Team Member"/>
                  <div className="card-body">
                    <h5 className="card-title">Cherishya</h5>
                    <p className="card-text">Student at bvrit</p>
                  </div>
              </div>
            </div>
          </div>
        </div>

      </p>
    </div>
  )
}

export default About
