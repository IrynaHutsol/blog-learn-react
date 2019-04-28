import React from 'react';
import './secondBlockNews.css';
import Profitably1 from './images/News/SecondBlock/profitably1.jpg';
import Author2 from './images/Author/author2.jpg';
import More from './images/more.jpg';

const SecondBlockNews = () => {
    return (
        <div className="second-block-news">
            <div className="row">
                <div className="col-1">
                    <div className="image-news2">
                    <img src={Profitably1} alt="корисно"/>
                    <div className="like-count2">
                        <input type="button" className="like2"/>
                        10
                </div>
            </div>
                </div>
                <div className="col-2">
                    <div className="news2">
                        <a href="">
                            <p className="title2">4 інгредієнти для молодості шкіри обличчя.</p>
                            <p className="text2">Вони здивують вас своєю ефективністю!
                            Шкіра є найбільшим органом тіла і постійно є у контакті
                            із шкідливими речовинами.</p>
                         </a>
                    </div>
                    <div className="author-of-news2">
                        <a href="" className="author-images2">
					        <img src={Author2} alt=""/>
				        </a>
                        <div className="author-surname-date2">
					        <a href="" className="author-surname2">Віталій Ступка</a>
					        <p className="date2">Квітень 21, 2019 15:15</p>
				        </div>
                        <a href="">
					        <img src={More} alt="" className="more2"/>
				        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SecondBlockNews;