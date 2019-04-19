import React from 'react';

import FacebookIconHeader from './Icon/FacebookIconHeader';
import TwitterIconHeader from './Icon/TwitterIconHeader';
import PinterestIconHeader from './Icon/PinterestIconHeader';

const SocialIcon =() => {
    return (
        <div className="social-icons">
            <FacebookIconHeader/>
            <TwitterIconHeader/>
            <PinterestIconHeader/>
        </div>       
    );
}

export default SocialIcon;