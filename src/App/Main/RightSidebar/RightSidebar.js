import React from 'react';
import Search from './Search/Search';
import Categoris from './CategorisBlogs/Categoris';
import Subscribe from './Subscribe/Subscribe';

const RightSidebar =()=> {
    return (
        <div>
            <Search/>
            <Categoris/>
            <Subscribe/>
        </div>
    );
}

export default RightSidebar;