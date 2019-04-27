import React from 'react';
import './firstBlockNews.css';
import Motivation1 from './images/News/motivation1.jpg'
import Author1 from './images/Author/author1.png'
import More from './images/more.jpg'

const FirstBlockNews = () => {
    return (
        <div className="first-block-news">
            <div className="image-news">
                <img src={Motivation1} alt="мотивація"/>
                <div className="like-count">
                    <input type="button" className="like"/>
                    17
                </div>
            </div>
            <div className="news">
            <a href="">
                <p className="title">Як зцілити себе самому?</p>
                <p className="text">У вас завжди є сили, щоб зцілити себе.
                У фізичному тілі закладені механізми самозцілення, 
                воно забезпечене захисною системою, яка не пропускає
                зовнішніх і внутрішніх збудників хвороб. 
                Пристрій тіла передбачає процес саморегенерації
                шляхом щоденного створення нових клітин.</p>
            </a>
            </div>
            <div className="author-of-news">
                <a href="" className="author-images">
					<img src={Author1} alt=""/>
				</a>
                <div className="author-surname-date">
					<a href="" className="author-surname">Орест Левицький</a>
					<p className="date">Квітень 23, 2019 10:15</p>
				</div>
                <a href="">
					<img src={More} alt="" className="more"/>
				</a>
            </div>
        </div>
    );
}

export default FirstBlockNews;