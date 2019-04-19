import React from 'react';

import './header.css';
import './socialIcon.css';
import './singin.css'

import SocialIcon from './SocialIcon/SocialIcon';
import SingIn from './SingIn/SingIn';

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
		</header>
    );
}

export default Header;