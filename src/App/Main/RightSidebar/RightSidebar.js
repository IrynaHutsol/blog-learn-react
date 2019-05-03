import React from 'react';
import Search from './Search/Search';
import Categoris from './CategorisBlogs/Categoris';

const RightSidebar =()=> {
    return (
        <div>
            <Search/>
            <Categoris/>
        </div>
    );
}

export default RightSidebar;