import React, { useEffect, useState } from 'react';

const UserProfile = () => {
    const [userDetails, setUserDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserDetails = async () => {

            try {
                const response = await fetch('http://localhost:5000/api/auth/getuser', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'auth-token': localStorage.getItem('token')
                    }
                });

               
                const data = await response.json();
                console.log('User details:', data);
                setUserDetails(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }
    return (
        <div className='profile flip' style={{ backgroundColor: 'white', fontFamily: 'Arial, sans-serif', marginTop: '20px' }}>
            <div className='heading' style={{ textAlign: 'center', marginTop: '20px' }}>
                <h1>Profile</h1>
            </div>
            <UserCard title="User Name" content={userDetails.name} />
            <UserCard title="Email" content={userDetails.email} />
            <UserCard title="City" content={userDetails.address} />
            <UserCard title="State" content={userDetails.state} />
            <UserCard title="Street" content={userDetails.street} />
            <UserCard title="Phone Number" content={userDetails.phoneNumber} />
            <UserCard title="Preferred Destinations" content={userDetails.preferredDestinations} />
            <UserCard title="Where Did You Hear About Us" content={userDetails.whereDidYouHearAboutUs} />
            <UserCard title="Gender" content={userDetails.gender} />
        </div>
    );
};

const UserCard = ({ title, content }) => (
    <div className="card" style={cardStyle}>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
        </div>
    </div>
);

const cardStyle = {
    width: '80%',
    marginTop: '20px',
    border: '2px solid',
    borderRadius: '15px',
    marginLeft: '100px',
    boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)'
};

export default UserProfile;
