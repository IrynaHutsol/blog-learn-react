import React from 'react';
import './footer.css';

const Footer =() => {
	return (
    <footer>
        <div className="footer">
            <div className="col-1-footer">
                Підпишіться на нашу розсилку
            </div>
            <div className="col-2-footer">
                <input type="email" placeholder="Email Adress" className="pole-3"/>
            </div>
            <div className="col-3-footer">
            <input type="button" value="Підписатися" className="pole-4"/>
            </div>
        </div>
    </footer>
	);
}

export default Footer;