import React from 'react';
import newsAll from './newsAll';
import FirstBlockNews from './FirstBlockNews';
import SecondBlockNews from './SecondBlockNews';
import ThirdBlockNews from './ThirdBlockNews';
import FourthBlockNews from './FourthBlockNews';
import MorePosts from './MorePosts';

const NewsListItem = () => {
    return (
        <div>
            <FirstBlockNews/>
                <div className="row">
                    {
                    newsAll.filter (newsAll=>newsAll.topNewsSecond === true).map(({
                            id,
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
                                <div key={id}>
                                    <SecondBlockNews
                                    imageNews={imageNews}
                                    sortBlogText={sortBlogText}
                                    like={like}
                                    title={title}
                                    text={text}
                                    imageAuthor={imageAuthor}
                                    surnameAuthor={surnameAuthor}
                                    dateNews={dateNews}
                                    />
                                </div>  
                        )
                        }
                    )
                    }
                </div>
                <div className="row">
                    {
                     newsAll.filter (newsAll=>newsAll.topNewsThird === true).map(({
                            id,
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
                                <div key={id}>
                                    <ThirdBlockNews
                                    imageNews={imageNews}
                                    sortBlogText={sortBlogText}
                                    like={like}
                                    title={title}
                                    text={text}
                                    imageAuthor={imageAuthor}
                                    surnameAuthor={surnameAuthor}
                                    dateNews={dateNews}
                                    />
                                </div>  
                            )
                        }
                    )
                    }
                </div>
                <div className="row">
                    {
                        newsAll.filter (newsAll=>newsAll.topNewsFourth === true).map(({
                                id,
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
                                    <div key={id}>
                                        <FourthBlockNews
                                        imageNews={imageNews}
                                        sortBlogText={sortBlogText}
                                        like={like}
                                        title={title}
                                        text={text}
                                        imageAuthor={imageAuthor}
                                        surnameAuthor={surnameAuthor}
                                        dateNews={dateNews}
                                        />
                                    </div>  
                            )
                            }
                        )
                    }
                </div>
            <MorePosts/>
        </div>
    );
}

export default NewsListItem;