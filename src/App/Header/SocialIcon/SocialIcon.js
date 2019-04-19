import React from 'react';

import FacebookIconHeader from './Icon/FacebookIconHeader';
import TwitterIconHeader from './Icon/TwitterIconHeader';
import PinterestIconHeader from './Icon/PinterestIconHeader';
import GoogleIconHeader from './Icon/GoogleIconHeader';
import InstagramIconHeader from './Icon/InstargamIconHeader';

const SocialIcon =() => {
    return (
        <div className="social-icons">
            <FacebookIconHeader/>
            <TwitterIconHeader/>
            <PinterestIconHeader/>
            <GoogleIconHeader/>
            <InstagramIconHeader/>
        </div>       
    );
}

export default SocialIcon;