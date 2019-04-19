import React from 'react';
import pinterestHeader from './pinterestHeader.png';

const PinterestIconHeader = ()=> {
    return (
    <a href="https://www.pinterest.com/" className="icons">
        <img src={pinterestHeader} alt="pinterest"/>
    </a>
    );
}

export default PinterestIconHeader;