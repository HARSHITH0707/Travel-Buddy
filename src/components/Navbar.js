import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login");
    }

    const handleNavClick = (path) => {
        props.setLoading(true);
        setTimeout(() => {
            navigate(path);
            props.setLoading(false);
        }, 1000); // Simulate a network delay
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <img src='/logo.png' alt='Travel Buddy Logo' height="40" width="150" />

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/" onClick={() => handleNavClick("/")}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/destination" ? "active" : ""}`} to="/destination" onClick={() => handleNavClick("/destination")}>Destinations</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/service" ? "active" : ""}`} to="/service" onClick={() => handleNavClick("/service")}>Services</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </a>
                            <ul className="dropdown-menu">
                                <li key="profile"><Link className="dropdown-item" to="/profile" onClick={() => handleNavClick("/profile")}>Profile</Link></li>
                                <li key="history"><Link className="dropdown-item" to="/history" onClick={() => handleNavClick("/history")}>Booked Destinations</Link></li>
                                <li key="divider"><hr className="dropdown-divider" /></li>
                                <li key="community"><a className="dropdown-item" href="/community" onClick={() => handleNavClick("/community")}>Our Community</a></li>
                            </ul>
                        </li>
                    </ul>
                    {!localStorage.getItem('token') ? (
                        <form className="d-flex mx-3" role="search">
                            <Link className='btn btn-primary mx-1' to="/login" role='button' onClick={() => handleNavClick("/login")}>Login</Link>
                            <Link className='btn btn-primary mx-1' to="/signup" role='button' onClick={() => handleNavClick("/signup")}>Signup</Link>
                        </form>
                    ) : (
                        <button onClick={handleLogout} className='btn btn-primary mx-2'>Logout</button>
                    )}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input
                            className="form-check-input"
                            onClick={props.toggleMode}
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                            checked={props.mode === 'dark'}
                            readOnly
                        />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
