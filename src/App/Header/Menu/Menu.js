import React from 'react';
import './menu.css';
import {Link} from 'react-router-dom'

const Menu =() => {
    return (
        <div className="menu">
			<ul className="nav">
				<li><Link to="/allBlogs">Усі блоги</Link></li>
				<li><a href="">Наука</a></li>
				<li><a href="">Цікаво</a></li>
				<li><a href="">Корисно</a></li>
				<li><Link to="/motivation">Мотивація</Link></li>
				<li><a href="">Натхнення</a></li>
			</ul>
        </div>
    );
}

export default Menu;