import React from 'react';
import googleHeader from './googleHeader.png';

const GoogleIconHeader = ()=> {
    return (
    <a href="https://accounts.google.com/" className="icons">
        <img src={googleHeader} alt="google"/>
    </a>
    );
}

export default GoogleIconHeader;