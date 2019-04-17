import React from 'react';

import './header.css';
import './socialIcon.css';

import SocialIcon from './SocialIcon/SocialIcon';

const Header =() => {
	return (
        <header>
            <div class="row">
                <div className="bg-header">
                    <div className="container">
                        <div className="col-mg-9">
                            <SocialIcon/>
                        </div>
                    </div>
                </div>
            </div>
		</header>
    );
}

export default Header;