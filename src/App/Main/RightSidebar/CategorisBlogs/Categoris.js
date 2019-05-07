import React from 'react';
import './categoris.css';

const Categoris =()=> {
    return (
        <div className="categoris">
            <p>Категорії</p>
            <ul> 
                <li><a href="">Усі блоги</a></li>
                <li><a href="">Наука</a></li>
                <li><a href="">Цікаво</a></li>
                <li><a href="">Корисно</a></li>
                <li><a href="">Мотивація</a></li>
                <li><a href="">Натхення</a></li>
            </ul>
        </div>
    );
}

export default Categoris;