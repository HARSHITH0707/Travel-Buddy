import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <div className="container">
        <h4>Contact Us</h4>
        <div className="row">
          <div className="col-md-4 my-3">
            <h5>Address</h5>
            <p>123 Street, hyderabad, telangana,India.</p>
          </div>
          <div className="col-md-4 my-3">
            <h5>Email</h5>
            <p>travelbuddy@services.com</p>
          </div>
          <div className="col-md-4 my-3">
            <h5>Phone</h5>
            <p>+91 9998886644</p>
          </div>
        </div>
        <div className="social-links">
          <a href="https://facebook.com" className="text-white mx-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="text-white mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" className="text-white mx-2">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
