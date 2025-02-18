import React, { useEffect, useState } from 'react';

const UserProfile = () => {
    const [userDetails, setUserDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({});

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
                setUserDetails(data);
                setFormData(data); // Initialize form data with current user details
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserDetails();
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdate = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/updateuser', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            setUserDetails(data);
            setIsEditing(false);
        } catch (error) {
            setError(error.message);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Profile</h1>
            {!isEditing ? (
                <>
                    <UserCard title="User Name" content={userDetails.name} />
                    <UserCard title="Email" content={userDetails.email} />
                    <UserCard title="City" content={userDetails.address} />
                    <UserCard title="State" content={userDetails.state} />
                    <UserCard title="Street" content={userDetails.street} />
                    <UserCard title="Phone Number" content={userDetails.phoneNumber} />
                    <UserCard title="Preferred Destinations" content={userDetails.preferredDestinations} />
                    <UserCard title="Where Did You Hear About Us" content={userDetails.whereDidYouHearAboutUs} />
                    <UserCard title="Gender" content={userDetails.gender} />
                    <div className="text-center mt-4">
                        <button 
                            onClick={() => setIsEditing(true)} 
                            className="btn btn-primary"
                        >
                            Edit Profile
                        </button>
                    </div>
                </>
            ) : (
                <form>
                    <EditableUserCard 
                        label="User Name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                    />
                    <EditableUserCard 
                        label="Email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                    />
                    <EditableUserCard 
                        label="City" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleInputChange} 
                    />
                    <EditableUserCard 
                        label="State" 
                        name="state" 
                        value={formData.state} 
                        onChange={handleInputChange} 
                    />
                    <EditableUserCard 
                        label="Street" 
                        name="street" 
                        value={formData.street} 
                        onChange={handleInputChange} 
                    />
                    <EditableUserCard 
                        label="Phone Number" 
                        name="phoneNumber" 
                        value={formData.phoneNumber} 
                        onChange={handleInputChange} 
                    />
                    <EditableUserCard 
                        label="Preferred Destinations" 
                        name="preferredDestinations" 
                        value={formData.preferredDestinations} 
                        onChange={handleInputChange} 
                    />
                    <EditableUserCard 
                        label="Where Did You Hear About Us" 
                        name="whereDidYouHearAboutUs" 
                        value={formData.whereDidYouHearAboutUs} 
                        onChange={handleInputChange} 
                    />
                    <EditableUserCard 
                        label="Gender" 
                        name="gender" 
                        value={formData.gender} 
                        onChange={handleInputChange} 
                    />
                    <div className="d-flex justify-content-between mt-4">
                        <button 
                            onClick={handleUpdate} 
                            className="btn btn-success"
                        >
                            Save Changes
                        </button>
                        <button 
                            onClick={() => setIsEditing(false)} 
                            className="btn btn-danger"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

const UserCard = ({ title, content }) => (
    <div className="card mb-3"  style={{ width:'54 rem',boxShadow:'8px 8px 16px 16px rgba(0, 0, 0, 0.2)' }}>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{content}</p>
        </div>
    </div>
);

const EditableUserCard = ({ label, name, value, onChange }) => (
    <div className="card mb-3">
        <div className="card-body">
            <div className="form-group">
                <label>{label}</label>
                <input 
                    type="text" 
                    name={name} 
                    value={value} 
                    onChange={onChange} 
                    className="form-control"
                />
            </div>
        </div>
    </div>
);

export default UserProfile;
