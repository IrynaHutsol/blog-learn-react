import React from 'react';
import twitterHeader from './twitterHeader.png';

const TwitterIconHeader = ()=> {
    return (
    <a href="https://twitter.com/" className="icons">
        <img src={twitterHeader} alt="twitter"/>
    </a>
    );
}

export default TwitterIconHeader;