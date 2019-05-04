import React from 'react';
import Search from './Search/Search';
import newsPopularPost from './PopularPost/newsPopularPost';
import Categoris from './CategorisBlogs/Categoris';
import Subscribe from './Subscribe/Subscribe';
import PopularPostTitle from './PopularPost/PopularPostTitle';
import PopularPost from './PopularPost/PopularPost';
import Tags from './Tags/Tags';



const RightSidebar =()=> {
    return (
        <div>
            <Search/>
            <Categoris/>
            <Subscribe/>
            <PopularPostTitle/>
            {
            newsPopularPost.map(({
                id,
                imageNews,
                dateNews,
                title,
                }) => {
                    return (
                            <div key={id}>
                                <PopularPost
                                imageNews={imageNews}
                                dateNews={dateNews}
                                title={title}
                                />
                            </div>  
                        )
                    }
                )
            }
            <Tags/>
        </div>
    );
}

export default RightSidebar;