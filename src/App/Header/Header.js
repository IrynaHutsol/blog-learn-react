import React from 'react';

import './header.css';
import './socialIcon.css';

import SocialIcon from './SocialIcon/SocialIcon';

const Header =() => {
	return (
        <header>
            <div className="bg-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <SocialIcon/>
                        </div>
                    </div>
                </div>
            </div>
		</header>
    );
}

export default Header;