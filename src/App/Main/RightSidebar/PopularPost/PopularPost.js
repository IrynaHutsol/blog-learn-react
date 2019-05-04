import React from 'react';
import PropTypes from 'prop-types';
import './popularPost.css';


const PopularPost =({
    imageNews,
    dateNews,
    title,
}) => {
    return (
        <div className="popular-post-image">
			<img src={imageNews} alt="" className="imag"/>
			<p className="date2">{dateNews}</p>
			<a href="">
				<p className="title-3">{title}</p>
			</a>
		</div>
    );
}

PopularPost.propTypes = {
    title: PropTypes.string.isRequired,
    dateNews: PropTypes.string.isRequired,
}

export default PopularPost;