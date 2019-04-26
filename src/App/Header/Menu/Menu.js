import React from 'react';
import './menu.css';

const Menu =() => {
    return (
        <div className="menu">
			<ul className="nav">
				<li><a href="">Усі блоги</a></li>
				<li><a href="">Наука</a></li>
				<li><a href="">Цікаво</a></li>
				<li><a href="">Корисно</a></li>
				<li><a href="">Мотивація</a></li>
				<li><a href="">Натхнення</a></li>
			</ul>
        </div>
    );
}

export default Menu;