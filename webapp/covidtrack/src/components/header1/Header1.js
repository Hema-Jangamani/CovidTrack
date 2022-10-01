import React, { createRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Header1 = (props) => {
    // const [inputValue, setInputValue] = useState("");
    // const inputRef = createRef();
    // const searchCountry = () => {
    //     setSearchVal(inputValue);
    // };

    return (

        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: 'fixed', top: '0', width: '100%', display: 'block', zIndex: '10', left: '0' }}>

                <div className="container-fluid">
                    <a className="navbar-brand" to="#">CovidTrack</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link" >Home</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <ul className="navbar-nav ml-auto">
                                        <li className="nav-item">
                                            <Link to="/register" className="nav-link">Registration</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/login" className="nav-link">Login</Link>
                                        </li>
                                    </ul>
                        <ul className="navbar-nav ml-auto">

                            <li className="nav-item">
                                <div className="dropdown">
                                    <button className="bg-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <Link to="login" className="nav-link"><i className="fas fa-user-circle"></i></Link>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><Link to="/home" className="dropdown-item">Logout</Link></li>
                                        <li><Link to="/edit" className="dropdown-item">EditProfile</Link></li>
                                        <li><Link to="/favorite" className="dropdown-item">Favorite</Link></li>
                                    </ul>
                    
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Header1;
