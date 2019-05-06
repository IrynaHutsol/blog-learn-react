import React from 'react';
import './morePosts.css';

const MorePosts =()=> {
    return (
        <div className="more-posts">
            <div className="more-post-text">
                More
            </div>
            <div className="more-post-button">
                <input type="button" className="button-ellipse"/>
            </div>
        </div>
    );
}

export default MorePosts;