import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Destination from './components/Destination';
import Service from './components/Service';
import BookingForm from './components/BookingForm';
import UserProfile from './components/UserProfile';
import Login from './components/Login';
import BookingHistory from './components/BookingHistory';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Community from './components/Community';
import Alert from './components/Alert';
import Spinner from './components/Spinner';
import SocialSticker from './components/SocialSticker'; // Import the SocialSticker component
import PrivateRoute from './components/PrivateRoute';
import ThankYou from './components/ThankYou';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} setLoading={setLoading} />
        <Alert alert={alert} />
        {loading && <Spinner />}
        <SocialSticker /> {/* Place the SocialSticker component here */}
        <div className='container'>
          <Routes>
            <Route exact path="/" element={ <Home />} />
            <Route exact path="/destination" element={<Destination />} />
            <Route exact path="/service" element={<Service />} />
            <Route exact path="/login" element={<Login showAlert={showAlert} />}  />
            <Route exact path="/history" element={<PrivateRoute>  <BookingHistory /></PrivateRoute>} />
            <Route exact path="/booking" element={<PrivateRoute>  <BookingForm /></PrivateRoute>} />
            <Route exact path="/profile" element={<PrivateRoute>  <UserProfile /></PrivateRoute>} />
            <Route exact path="/signup" element={<Signup  showAlert={showAlert}/>}  />
            <Route exact path="/community" element={<Community />} />
            <Route exact path="/confirmed" element={<ThankYou/>} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
