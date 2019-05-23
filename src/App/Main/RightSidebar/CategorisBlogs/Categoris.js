import React from 'react';
import './categoris.css';
import {Link} from 'react-router-dom'

const Categoris =()=> {
    return (
        <div className="categoris">
            <p>Категорії</p>
            <ul> 
                <li><a href="">Усі блоги</a></li>
                <li><a href="">Наука</a></li>
                <li><a href="">Цікаво</a></li>
                <li><a href="">Корисно</a></li>
                <li><Link to="/motivation">Мотивація</Link></li>
                <li><a href="">Натхення</a></li>
            </ul>
        </div>
    );
}

export default Categoris;