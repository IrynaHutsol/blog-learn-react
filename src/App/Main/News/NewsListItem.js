import React from 'react';
import news from './newsSecond';
import FirstBlockNews from './FirstBlockNews';
import SecondBlockNews from './SecondBlockNews';

const NewsListItem = () => {
    return (
        <div>
            <FirstBlockNews/>
            {
               news.map(({
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
    );
}

export default NewsListItem;