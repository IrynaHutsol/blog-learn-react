import React from 'react';
import PropTypes from 'prop-types';
import './thirdBlockNews.css';
import More from './images/more.jpg';

const ThirdBlockNews = ({
    imageNews,
    sortBlogText,
    like,
    title,
    text,
    imageAuthor,
    surnameAuthor,
    dateNews,
}) => {
    return (
        <div className="third-block-news">
            <div className="image-news3">
                <img src={imageNews} alt=""/>
                <p className="sort-blog-text">{sortBlogText}</p>
                <div className="like-count">
                    <input type="button" className="like"/>
                    {like}
                 </div>
            </div>
            <div className="news3">
                <a href="">
                    <p className="title2">{title}</p>
                    <p className="text2">{text}</p>
                </a>
            </div>
            <div className="author-of-news2">
                <a href="" className="author-images2">
                    <img src={imageAuthor} alt=""/>
                </a>
                <div className="author-surname-date3">
                    <a href="" className="author-surname2">{surnameAuthor}</a>
                    <p className="date2">{dateNews}</p>
                </div>
                <a href="">
                    <img src={More} alt="" className="more3"/>
                 </a>
            </div>
        </div>
        );
    }

    ThirdBlockNews.propTypes = {
        sortBlogText: PropTypes.string.isRequired,
        like: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        surnameAuthor: PropTypes.string.isRequired,
        dateNews: PropTypes.string.isRequired,
    }

    export default ThirdBlockNews;