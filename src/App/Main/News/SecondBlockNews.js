import React from 'react';
import PropTypes from 'prop-types';
import './secondBlockNews.css';
import More from './images/more.jpg';

const SecondBlockNews = ({
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
        <div className="second-block-news">
            <div className="row">
                <div className="col-1">
                    <div className="image-news2">
                        <img src={imageNews} alt="корисно"/>
                        <p className="sort-blog-text">{sortBlogText}</p>
                        <div className="like-count">
                            <input type="button" className="like"/>
                            {like}
                    </div>
                 </div>
                </div>
                <div className="col-2">
                    <div className="news2">
                        <a href="">
                            <p className="title2">{title}</p>
                            <p className="text2">{text}</p>
                         </a>
                    </div>
                    <div className="author-of-news">
                        <a href="" className="author-images2">
					        <img src={imageAuthor} alt=""/>
				        </a>
                        <div className="author-surname-date2">
					        <a href="" className="author-surname2">{surnameAuthor}</a>
					        <p className="date2">{dateNews}</p>
				        </div>
                        <a href="">
					        <img src={More} alt="" className="more2"/>
				        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

SecondBlockNews.propTypes = {
    sortBlogText: PropTypes.string.isRequired,
    like: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    surnameAuthor: PropTypes.string.isRequired,
    dateNews: PropTypes.string.isRequired,
}


export default SecondBlockNews;