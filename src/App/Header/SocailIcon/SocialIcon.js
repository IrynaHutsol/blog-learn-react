import React from 'react';

import SocialIcon from 'facebook-header.png'

const SocialIcon =() => {
    return (
        <div className="social-icons">
            <a href="https://www.facebook.com/" className="icons">
                <img src={SocialIcon} alt="facebook"/>
            </a>
        </div>       
    );
}

export default SocialIcon;