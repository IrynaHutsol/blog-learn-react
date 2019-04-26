import React from 'react';
import './caption.css';
import author from './Author/author-1.png';

const Caption =() => {
    return (
        <div className="caption">
            <h3>Натхнення</h3>
            <h1>«Коли відчуваєте, що вам набридло, Штовхніть себе як слід» – 10 кращих порад від Ошо</h1>
            <div>
                <a href="">
                    <div className="button">Читати</div>
                </a>
            </div>
            <a href="">
                <img src={author} alt="" />
            </a>
            <div>
				<a href="" className="caption-surname">Сергій Богданов</a>
			    <p className="caption-date">Квітень 21, 2019 10:15</p>
			</div>
        </div>
    );
}

export default Caption;