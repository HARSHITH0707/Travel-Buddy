import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const services = [
  {
    title: 'Flight Booking',
    description: 'Book flights to your favorite destinations at the best prices.',
    imgSrc: './flight.jpg'
  },
  {
    title: 'Hotel Reservations',
    description: 'Reserve top-rated hotels at affordable rates.',
    imgSrc: './hotel.jpg'
  },
  {
    title: 'Tour Packages',
    description: 'Choose from a variety of tour packages for all budgets.',
    imgSrc: './package.jpg'
  },
  {
    title: 'Travel Insurance',
    description: 'Secure your travel plans with our comprehensive insurance policies.',
    imgSrc: './insurance.jpg'
  },
  {
    title: 'Car Rentals',
    description: 'Rent cars at your destination with ease.',
    imgSrc: './car.jpg'
  }
];

const Service = () => {
  return (
    <Container className="my-5 zoomIn">
      <h1 className="text-center mb-4 " style={{color:' blue'}}>Our Services</h1>
      <Row>
        {services.map((service, index) => (
          <Col md={4} sm={6} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={service.imgSrc} />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Service;

