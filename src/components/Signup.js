import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        state: '',
        street: '',
        phoneNumber: '',
        preferredDestinations: '',
        whereDidYouHearAboutUs: '',
        gender: ''
    });
    let history = useNavigate();

    const handlesubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, address, state, street, phoneNumber, preferredDestinations, whereDidYouHearAboutUs, gender } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password, address, state, street, phoneNumber, preferredDestinations, whereDidYouHearAboutUs, gender })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            history("/login");
            props.showAlert("Created Account Sucessfully","success")
        } else {
            props.showAlert("Something Went Wrong","danger")
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className='register' style={{ backgroundColor: 'white', boxShadow: '8px 8px 16px 16px rgba(0, 0, 0, 0.2)', fontFamily: 'Arial, sans-serif' }}>
            <div className='heading' style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h1>Register</h1>
            </div>

            <form onSubmit={handlesubmit}>
                <div className='inputs' style={{ marginLeft: '30px', marginRight: '20px', borderRadius: '50px' }}>

                    <div className="input-group flex-nowrap" >
                        <span className="input-group-text" id="addon-wrapping">@</span>
                        <input name="name" onChange={onChange} type="text" className="name" id='name' placeholder="name" minLength={3} aria-label="name" aria-describedby="addon-wrapping" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input name="email" onChange={onChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input name='password' onChange={onChange} type="password" className="form-control" id="exampleInputPassword1" minLength={5} required />
                    </div>

                    <div className="input-group input-group-lg">
                        <span className="input-group-text" id="inputGroup-sizing-lg">address</span>
                        <input name='address' onChange={onChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required />
                    </div>

                    <div className="input-group mb-3" style={{ height: '50px' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect01">State</label>
                        <select name='state' onChange={onChange} className="form-select" id="inputGroupSelect01" required>
                            <option selected>Choose...</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>
                    </div>

                    <div className="input-group input-group-lg">
                        <span className="input-group-text" id="inputGroup-sizing-lg">Street</span>
                        <input name='street' onChange={onChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required />
                    </div>

                    <div className="input-group input-group-lg">
                        <span className="input-group-text" id="inputGroup-sizing-lg">Phone Number</span>
                        <input name='phoneNumber' onChange={onChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required />
                    </div>

                    <div className="input-group input-group-lg">
                        <span className="input-group-text" id="inputGroup-sizing-lg">Preferred preferredDestinations</span>
                        <input name='preferredDestinations' onChange={onChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required />
                    </div>

                    <div className="input-group input-group-lg">
                        <span className="input-group-text" id="inputGroup-sizing-lg">Where did you hear about us</span>
                        <input name='whereDidYouHearAboutUs' onChange={onChange} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" required />
                    </div>

                    <div className="input-group mb-3" style={{ height: '50px' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Gender</label>
                        <select name='gender' onChange={onChange} className="form-select" id="inputGroupSelect01" required>
                            <option selected>Choose...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                        <label className="form-check-label" htmlFor="exampleCheck1">Verify details</label>
                    </div>

                    <div className='buttons' style={{ marginLeft: '580px' }}>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Signup;
