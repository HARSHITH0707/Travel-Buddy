import React from 'react'

const Accordian = () => {
  return (
    <div className='acc' style={{backgroundColor:'white'}}>
      <div className="accordion" id="accordionExample" style={{ marginTop: '20px' }}>
      <div className="accordion-item" style={{ marginTop: '20px',border:'2px solid',borderRadius:'3px' ,marginLeft:'20px',marginRight:'20px',boxShadow:'0 8px 16px 0 rgba(0, 0, 0, 0.5)'}}>
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            What features does your website offer to help users plan their trips efficiently?

          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            Our website offers a range of features to assist users in planning their trips efficiently. These include customizable itineraries, destination guides, flight and accommodation search engines, activity recommendations, and user reviews.

          </div>
        </div>
      </div>
      <div className="accordion-item" style={{ marginTop: '20px',border:'2px solid',borderRadius:'3px' ,marginLeft:'20px',marginRight:'20px',boxShadow:'0 8px 16px 0 rgba(0, 0, 0, 0.5)'}}>
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Can users customize their travel itineraries on your platform? If so, how flexible are these options?

          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            Yes, users can customize their travel itineraries extensively on our platform. They have the flexibility to choose
            their destinations, dates, accommodations, activities, and transportation options according to their preferences and schedule.

          </div>
        </div>
      </div>
      <div className="accordion-item"  style={{ marginTop: '20px',border:'2px solid',borderRadius:'3px' ,marginLeft:'20px',marginRight:'20px',boxShadow:'0 8px 16px 0 rgba(0, 0, 0, 0.5)'}}>
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            How does your website assist users in finding the best deals on flights, accommodations, and activities?

          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            We provide users with access to a variety of tools to help them find the best deals on flights, accommodations, and
            activities. Our search engines compare prices from multiple providers, and we offer exclusive discounts and deals f
            or registered users.

          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Accordian
