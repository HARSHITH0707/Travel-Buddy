import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap'; // Assuming Bootstrap is used for styling

function BookingHistory() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/booking/getnotes', {
                    headers: {
                        'auth-token': localStorage.getItem('token')
                    }
                });
                setBookings(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching bookings:', error);
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="mb-4" style={{textAlign:'center',backgroundColor:'white'}}>Your Booking History</h2>
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : (
                <div className="list-group" style={{border:'2px solid'}}>
                    {bookings.length > 0 ? (
                        bookings.map((booking, index) => (
                            <div key={index} className="list-group-item" style={{border:'2px solid'}}>
                                <h5 className="mb-1">{booking.destinationName}</h5>
                                <p className="mb-1"><strong>Hotel Type:</strong> {booking.hotel}</p>
                                <p className="mb-1"><strong>Transportation Mode:</strong> {booking.transport}</p>
                                <p className="mb-1"><strong>Start Date:</strong> {new Date(booking.fromDate).toLocaleDateString()}</p>
                                <p className="mb-1"><strong>End Date:</strong> {new Date(booking.toDate).toLocaleDateString()}</p>
                                <p className="mb-0"><strong>Estimated Cost:</strong> ${booking.cost}</p>
                            </div>
                        ))
                    ) : (
                        <p>No bookings found.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default BookingHistory;
