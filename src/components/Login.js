import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Login= (props) => {
  const[Credentials,setCredentials]=useState({email:"",password:""})
  let history= useNavigate();

const handlesubmit= async(e)=>{
  e.preventDefault();
  const response=await fetch("http://localhost:5000/api/auth/login",{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({email:Credentials.email,password:Credentials.password})
  });
  const json=await response.json()
  console.log(json)
  if(json.success)
    {
      localStorage.setItem('token',json.jwtData);
      history("/");
      props.showAlert("login Sucessfull","success")
    }
    else
    {
      props.showAlert("Invalid Credentials","danger")
    }
}

const onChange=(e)=>{
  setCredentials({...Credentials,[e.target.name]:e.target.value})
}

  return (
    <div className="container vh-100 position-relative" style={{background: 'black'}}>
      {/* Background with opacity */}
      <div className="position-absolute top-0 w-100 h-100" style={{
        backgroundImage: 'url("https://i0.wp.com/themoreitravel.com/wp-content/uploads/2014/07/airplane.gif?fit=500%2C280&ssl=1")',
        backgroundSize: 'cover',
        opacity: 0.5
      }}></div>

      {/* Content with clear visibility */}
      <div className="position-absolute top-0 w-100 h-100 d-flex align-items-center justify-content-center">
        <div className="text-center text-white px-3" style={{ zIndex: 10 }}>
          <h1 className="display-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '700', letterSpacing: '1px' }}>Plan your travel at budget</h1>
          <h3 className="mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Join now and explore the world</h3>
          
          <form className="form-inline justify-content-center" onSubmit={handlesubmit}>
            <div className="form-group mb-2">
              <input type="email" className="form-control" id='email' name='email' value={Credentials.email} onChange={onChange} placeholder="Email address" required />
            </div>
            <div className="form-group mx-sm-3 mb-2">
              <input type="password" className="form-control" name='password' value={Credentials.password} onChange={onChange} id='password' placeholder="Enter password" required />
            </div>
            <button type="submit" className="btn btn-warning mb-2" >Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
