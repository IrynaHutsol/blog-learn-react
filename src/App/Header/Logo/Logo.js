import React from 'react';
import './logo.css';
import logo from './logo.png';


const Logo =() => {
	return (
        <div className="logo-container">
            <a href="" className="logo">
                <img src={logo} alt="PASCO"/>
            </a>
        </div>
    );
}

export default Logo;