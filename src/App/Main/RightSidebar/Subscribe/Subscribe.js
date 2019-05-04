import React from 'react';
import './subscribe.css';
import Facebook from './images/facebook.png'
import Twitter from './images/twitter.png'
import Pinterest from './images/pinterest.png'
import Dribbble from './images/dribbble.png'

const Subscribe =()=> {
    return (
        <div className="subscribe">
            <p className="subscribe-text">Підписатися</p>
            <p className="subscribe-name">Ваше ім'я</p>
            <input type="text" placeholder="Ірина Гуцол" className="pole-1"/>
            <p className="subscribe-name">Email</p>
            <input type="text" placeholder="Email@adress.com" className="pole-1"/>
            <input type="button" value="Підписатися" className="pole-2"/>
            <p className="or">or</p>
            <a href="https://www.facebook.com/">
                <img src={Facebook} alt=""/>
            </a>
            <a href="https://twitter.com/">
                <img src={Twitter} alt=""/>
            </a>
            <a href="https://www.pinterest.com/">
                <img src={Pinterest} alt=""/>
            </a>
            <a href="https://dribbble.com/">
                <img src={Dribbble} alt=""/>
            </a>
        </div>
    );
}

export default Subscribe;