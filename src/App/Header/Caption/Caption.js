import React from 'react';
import './caption.css';
import author from './Author/author-1.png';

const Caption =() => {
    return (
        <div className="caption">
            <h3>inspiration</h3>
            <h1>5 Ways milllennials can start building their future today</h1>
            <div>
                <a href="">
                    <div className="button">Read me</div>
                </a>
            </div>
            <a href="">
                <img src={author} alt="" />
            </a>
            <div>
				<a href="" className="caption-surname">Kevin Mac</a>
			    <p className="caption-date">April 08, 2019 10:15</p>
			</div>
        </div>
    );
}

export default Caption;