import React from 'react';
import newsSecond from './newsSecond';
import newsThird from './newsThird';
import FirstBlockNews from './FirstBlockNews';
import SecondBlockNews from './SecondBlockNews';
import ThirdBlockNews from './ThirdBlockNews';

const NewsListItem = () => {
    return (
        <div>
            <FirstBlockNews/>
            {
               newsSecond.map(({
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
            {
               newsThird.map(({
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
    );
}

export default NewsListItem;