import React from 'react';
import './thirdBlockNews.css';
import Articles5 from './images/News/ThirdBlock/articles5.jpg';
import Author4 from './images/Author/author2.jpg';
import More from './images/more.jpg';

const ThirdBlockNews = () => {
    return (
        <div className="third-block-news">
            <div className="image-news3">
                <img src={Articles5} alt=""/>
                <p className="sort-blog-text">Наука</p>
                <div className="like-count">
                    <input type="button" className="like"/>
                    10
                 </div>
            </div>
            <div className="news3">
                <a href="">
                    <p className="title2">Фізики з'ясували чому виноград спалахує у мікрохвильовці.</p>
                    <p className="text2">У мікрохвильовці невеликі плоди винограду, 
                    за лічені секунди нагрівання ефектно займаються спалахами.</p>
                </a>
            </div>
            <div className="author-of-news2">
                <a href="" className="author-images2">
                    <img src={Author4} alt=""/>
                </a>
                <div className="author-surname-date3">
                    <a href="" className="author-surname2">Віталі Ступка</a>
                    <p className="date2">Квітень 31, 2019 19:23</p>
                </div>
                <a href="">
                    <img src={More} alt="" className="more3"/>
                 </a>
            </div>
        </div>
    
        );
    }

    export default ThirdBlockNews;