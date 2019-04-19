import React from 'react';
import facebookHeader from './facebookHeader.png';

const FacebookIconHeader = ()=> {
    return (
    <a href="https://www.facebook.com/" className="icons icons-facebook">
        <img src={facebookHeader} alt="facebook"/>
    </a>
    );
}

export default FacebookIconHeader;