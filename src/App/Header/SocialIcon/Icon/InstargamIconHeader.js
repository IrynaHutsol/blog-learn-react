import React from 'react';
import instagramHeader from './instagramHeader.png';

const InstagramIconHeader = ()=> {
    return (
    <a href="https://www.instagram.com/" className="icons">
        <img src={instagramHeader} alt="instagram"/>
    </a>
    );
}

export default InstagramIconHeader;