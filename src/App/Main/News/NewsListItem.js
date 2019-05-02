import React from 'react';
import newsSecond from './newsSecond';
import newsThird from './newsThird';
import newsFourth from './newsFourth';
import FirstBlockNews from './FirstBlockNews';
import SecondBlockNews from './SecondBlockNews';
import ThirdBlockNews from './ThirdBlockNews';
import FourthBlockNews from './FourthBlockNews';

const NewsListItem = () => {
    return (
        <div>
            <FirstBlockNews/>
                <div className="row">
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
                </div>
                <div className="row">
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
                <div className="row">
                    {
                        newsFourth.map(({
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
        </div>
    );
}

export default NewsListItem;