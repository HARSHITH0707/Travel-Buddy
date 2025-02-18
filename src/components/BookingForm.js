import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BookingForm() {
    let navigate = useNavigate();

    const [formData, setFormData] = useState({
        destination: '',
        hotelType: '',
        transportationMode: '',
        startDate: '',
        endDate: ''
    });

    const [estimatedCost, setEstimatedCost] = useState(0);

    const costs = {
        destination: {
            default: 100,
            kashmir: 200
        },
        hotelType: {
            budget: 50,
            boutique: 100,
            luxury: 200
        },
        transportationMode: {
            air: 300,
            train: 100,
            bus: 50,
            car: 200
        }
    };

    const destinations = [
        { value: 'suntemple', label: 'Sun Temple' },
        { value: 'charminar', label: 'Charminar' },
        { value: 'goa', label: 'Goa' },
        { value: 'ajantaCaves', label: 'Ajanta Caves' },
        { value: 'backwatersOfKerala', label: 'Backwaters Of Kerala' },
        { value: 'tirupati', label: 'Tirupati' },
        { value: 'mahabalipuram', label: 'Mahabalipuram' },
        { value: 'munnar', label: 'Munnar' },
        { value: 'elephantaCaves', label: 'Elephanta Caves' },
        { value: 'shimla', label: 'Shimla' },
        { value: 'kashmir', label: 'Kashmir' },
        { value: 'tajmahal', label: 'Taj Mahal' }
    ];

    const handleClick = () => {
        navigate("/confirmed");
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        calculateCost({
            ...formData,
            [name]: value
        });
    };

    const calculateCost = (data) => {
        const destinationCost = costs.destination[data.destination] || costs.destination.default || 0;
        const hotelCost = costs.hotelType[data.hotelType] || 0;
        const transportationCost = costs.transportationMode[data.transportationMode] || 0;
        const dailyCost = destinationCost + hotelCost + transportationCost;

        const startDate = new Date(data.startDate);
        const endDate = new Date(data.endDate);
        const timeDiff = endDate - startDate;
        const numberOfDays = timeDiff > 0 ? Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) : 0;

        const totalCost = dailyCost * numberOfDays;
        setEstimatedCost(totalCost);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const bookingData = { ...formData, estimatedCost };
        try {
            await axios.post('http://localhost:5000/api/booking/addnotes', bookingData, {
                headers: {
                    'auth-token': localStorage.getItem('token')
                }
            });
            handleClick();
        } catch (error) {
            console.error('Error submitting booking:', error);
        }
    };

    return (
        <div className="container mt-5 my-3 zoomIn" style={{
            backgroundImage: 'url("/munnar.jpeg")',
            backgroundSize: 'cover',
            opacity: 0.05
        }}>
            <h2 className="mb-4 text-center my-3 text-white" style={{ zIndex: '1', fontWeight: '700' }}>Book Your Trip</h2>
            <form onSubmit={handleSubmit}>

                <div className="mb-4">
                    <label htmlFor="destination" className="form-label text-white bg-black" style={{ zIndex: '1', fontWeight: '700' }}>Destination</label>
                    <select name="destination" className="form-select" value={formData.destination} onChange={handleInputChange}>
                        <option value="">Choose...</option>
                        {destinations.map(dest => (
                            <option key={dest.value} value={dest.value}>{dest.label}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="hotelType" className="form-label text-white bg-black" style={{ zIndex: '1', fontWeight: '700' }}>Hotel Type</label>
                    <select name="hotelType" className="form-select" value={formData.hotelType} onChange={handleInputChange}>
                        <option value="">Choose...</option>
                        <option value="budget">Budget</option>
                        <option value="boutique">Boutique</option>
                        <option value="luxury">Luxury</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="transportationMode" className="form-label text-white bg-black" style={{ zIndex: '1', fontWeight: '700' }}>Preferred Mode of Transportation</label>
                    <select name="transportationMode" className="form-select" value={formData.transportationMode} onChange={handleInputChange}>
                        <option value="">Choose...</option>
                        <option value="air">Airplane</option>
                        <option value="train">Train</option>
                        <option value="bus">Bus</option>
                        <option value="car">Car</option>
                    </select>
                </div>

                <div className="row g-3 mb-4">
                    <div className="col">
                        <label htmlFor="startDate" className="form-label text-white bg-black" style={{ zIndex: '1', fontWeight: '700' }}>Start Date</label>
                        <input type="date" className="form-control" name="startDate" value={formData.startDate} onChange={handleInputChange} />
                    </div>
                    <div className="col">
                        <label htmlFor="endDate" className="form-label text-white bg-black" style={{ zIndex: '1', fontWeight: '700' }}>End Date</label>
                        <input type="date" className="form-control" name="endDate" value={formData.endDate} onChange={handleInputChange} />
                    </div>
                </div>

                <div className="text-center mb-4">
                    <h3>Estimated Budget: ${estimatedCost}</h3>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit Booking</button>
                </div>
            </form>
        </div>
    );
}

export default BookingForm;
