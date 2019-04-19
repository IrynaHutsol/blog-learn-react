import React from 'react';

import FacebookIconHeader from './Icon/FacebookIconHeader';
import TwitterIconHeader from './Icon/TwitterIconHeader';
import PinterestIconHeader from './Icon/PinterestIconHeader';
import GoogleIconHeader from './Icon/GoogleIconHeader';

const SocialIcon =() => {
    return (
        <div className="social-icons">
            <FacebookIconHeader/>
            <TwitterIconHeader/>
            <PinterestIconHeader/>
            <GoogleIconHeader/>
        </div>       
    );
}

export default SocialIcon;