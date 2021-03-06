import React from 'react';

import './header.css';

import SocialIcon from './SocialIcon/SocialIcon';
import SingIn from './SingIn/SingIn';
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import Caption from './Caption/Caption';


const Header =() => {
	return (
        <header>
            <div className="bg-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <SocialIcon/>
                        </div>
                        <div className="col-lg-3">
                            <SingIn/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-header-imag">
                <div className="container bg-imag">
                    <div className="col-lg-3">
                        <Logo/>
                    </div>
                    <div className="col-lg-9">
                        <Menu/>
                    </div>
                    <div className="col-lg-12">
                        <Caption/>   
                    </div>
                </div>
            </div>
		</header>
    );
}

export default Header;