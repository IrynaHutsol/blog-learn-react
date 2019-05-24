import React from 'react';
import './MotivationPage.css';
import {Link} from 'react-router-dom';
import facebookHeader from './images/facebookHeader.png';
import twitterHeader from './images/twitterHeader.png';
import pinterestHeader from './images/pinterestHeader.png';
import googleHeader from './images/googleHeader.png';
import instagramHeader from './images/instagramHeader.png';
import logo from './images/logo.png';
import singIn from './images/singin.png';
import author4 from './images/author4.png';
import author3 from './images/author3.jpg';
import author2 from './images/author2.jpg';
import author1 from './images/author1.png';
import motivation1 from './images/motivation1.png';
import motivation2 from './images/motivation2.jpg';
import motivation3 from './images/motivation3.jpg';
import motivation4 from './images/motivation4.jpg';
import motivation5 from './images/motivation5.jpg';
import motivation6 from './images/motivation6.jpg';
import motivation7 from './images/motivation7.jpg';
import motivation8 from './images/motivation8.jpg';
import motivation9 from './images/motivation9.png';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import pinterest from './images/pinterest.png';
import dribbble from './images/dribbble.png';
import pp1 from './images/pp1.jpg';
import pp2 from './images/pp2.png';
import pp3 from './images/pp3.jpg';
import pp4 from './images/pp4.jpg';



const MotivationPage =()=> {
    return (
    <div>
        <header>
            <div className="bg-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <a href="https://www.facebook.com/" className="icons icons-facebook">
                                <img src={facebookHeader} alt="facebook"/>
                            </a>
                            <a href="https://twitter.com/" className="icons">
                                <img src={twitterHeader} alt="twitter"/>
                            </a>
                            <a href="https://www.pinterest.com/" className="icons">
                                <img src={pinterestHeader} alt="pinterest"/>
                            </a>
                            <a href="https://accounts.google.com/" className="icons">
                                <img src={googleHeader} alt="google"/>
                            </a>
                            <a href="https://www.instagram.com/" className="icons">
                                <img src={instagramHeader} alt="instagram"/>
                            </a>
                        </div>
                        <div className="col-lg-3">
                            <div className="sing-in">
                                <a href="" className="sing-in-icon">
                                    <img src={singIn} alt="sing in"/>
                                </a>  
                                <a href="" className="sing-in-text">
                                    Увійти
                                </a>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-header-imag">
                <div className="container bg-imag">
                    <div className="col-lg-3">
                        <div className="logo-container">
                            <a href="" className="logo">
                                <img src={logo} alt="PASCO"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="menu">
                            <ul className="nav">
								<li><Link to="/allblogs">Усі блоги</Link></li>
                                <li><a href="">Наука</a></li>
                                <li><a href="">Цікаво</a></li>
                                <li><a href="">Корисно</a></li>
                                <li><a href="">Мотивація</a></li>
                                <li><a href="">Натхнення</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="caption">
                            <h3>Мотивація</h3>
                            <h1>Як знайти ідеальну роботу? Для початку складіть ідеальний графік дня.</h1>
                            <div>
                                <a href="">
                                    <div className="button">Читати</div>
                                </a>
                            </div>
                            <a href="">
                                <img src={author4} alt="" />
                            </a>
                            <div>
                                <a href="" className="caption-surname">Сергій Богданов</a>
                                <p className="caption-date">Травень 10, 2019 15:15</p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </header>
        <main>
        <div className="bg-main">
            <div className="container">
                <div className="row">
                    <div className="col-m-lg-9">
                        <div className="first-block-news">
				            <div className="image-news">
				                <img src={motivation1} alt="мотивація"/>
				                <p className="sort-blog-text">Мотивація</p>
				                <div className="like-count">
				                    <input type="button" className="like"/>
				                    17
				                </div>
				            </div>
				            <div className="news">
				            <a href="">
				                <p className="title">Як ідеально облаштувати робоче місце?</p>
				                <p className="text">Від того, як ви змогли облаштувати робоче місце, буде залежати ефективність праці. Психологи вже не один раз стверджували, що вдала організація простору має безпосередній вплив на ефективність роботи.Тому радимо перед виконанням важливих справ створити оптимальну робочу атмосферу.</p>
				            </a>
				            </div>
				            <div className="author-of-news">
				                <a href="" className="author-images">
									<img src={author3} alt=""/>
								</a>
				                <div className="author-surname-date">
									<a href="" className="author-surname">Олексій Зінчук</a>
									<p className="date">Травень 09, 2019 10:15</p>
								</div>
				                <a href="">
									<img src="images/more.jpg" alt="" className="more"/>
								</a>
				            </div>
				        </div>
	                    <div className="second-block-news">
				            <div className="row">
				                <div className="col-1">
				                    <div className="image-news2">
				                        <img src={motivation2} alt=""/>
				                        <p className="sort-blog-text">мотивація</p>
				                        <div className="like-count">
				                            <input type="button" className="like"/>
				                            23
				                        </div>
				                    </div>
				                </div>
				                <div className="col-2">
				                    <div className="news2">
				                        <a href="">
				                            <p className="title2">Що вбиває нашу мотивацію до дій?</p>
				                            <p className="text2">Сильна мотивація є рушійною силою для всіх наших дій. Однак чомусь з часом будь-яке натхнення до роботи зникає. Що ж вбиває мотивацію?</p>
				                        </a>
				                    </div>
				                    <div className="author-of-news2">
				                        <a href="" className="author-images2">
				                            <img src={author2} alt=""/>
				                        </a>
				                        <div className="author-surname-date2">
				                            <a href="" className="author-surname2">Віталій Ступка</a>
				                            <p className="date2">Травень 10, 2019 17:37</p>
				                        </div>
				                        <a href="">
				                            <img src="images/more.jpg" alt="" className="more2"/>
				                        </a>
				                    </div>
				                </div>
				            </div>
				        </div>
				        <div className="second-block-news">
				            <div className="row">
				                <div className="col-1">
				                    <div className="image-news2">
				                        <img src={motivation3} alt=""/>
				                        <p className="sort-blog-text">мотивація</p>
				                        <div className="like-count">
				                            <input type="button" className="like"/>
				                            15
				                        </div>
				                    </div>
				                </div>
				                <div className="col-2">
				                    <div className="news2">
				                        <a href="">
				                            <p className="title2">Мотивація до навчання – декілька простих порад.</p>
				                            <p className="text2">Кожна людина зіштовхується з необхідністю розвиватися. Досить часто на шляху до успіху наша мотивація до навчання кудись зникає.</p>
				                        </a>
				                    </div>
				                    <div className="author-of-news2">
				                        <a href="" className="author-images2">
				                            <img src={author1} alt=""/>
				                        </a>
				                        <div className="author-surname-date2">
				                            <a href="" className="author-surname2">Орест Левицький</a>
				                            <p className="date2">Травень 03, 2019 21:30</p>
				                        </div>
				                        <a href="">
				                            <img src="images/more.jpg" alt="" className="more2"/>
				                        </a>
				                    </div>
				                </div>
				            </div>
				        </div>
				   	    <div className="second-block-news">
				            <div className="row">
				                <div className="col-1">
				                    <div className="image-news2">
				                        <img src={motivation4} alt=""/>
				                        <p className="sort-blog-text">мотивація</p>
				                        <div className="like-count">
				                            <input type="button" className="like"/>
				                           07
				                        </div>
				                    </div>
				                </div>
				                <div className="col-2">
				                    <div className="news2">
				                        <a href="">
				                            <p className="title2">Як перестати лінуватися і купити слона?</p>
				                            <p className="text2">Людина, яка просиджує життя на дивані виглядає сумно і жалюгідно, правда? Крім тих випадків, коли це ви.</p>
				                        </a>
				                    </div>
				                    <div className="author-of-news2">
				                        <a href="" className="author-images2">
				                            <img src={author3} alt=""/>
				                        </a>
				                        <div className="author-surname-date2">
				                            <a href="" className="author-surname2">Олексій Зінчук</a>
				                            <p className="date2">Травень 05, 2019 22:27</p>
				                        </div>
				                        <a href="">
				                            <img src="images/more.jpg" alt="" className="more2"/>
				                        </a>
				                    </div>
				                </div>
				            </div>
				        </div>
				        <div className="third-block-news">
				            <div className="row">
				                <div className="image-news3">
				                    <img src={motivation5} alt=""/>
				                    <p className="sort-blog-text">мотивація</p>
				                    <div className="like-count">
				                        <input type="button" className="like"/>
				                        11
				                    </div>
				                </div>
				                <div className="news3">
				                    <a href="">
				                        <p className="title2">Ейфорія бігуна: правда чи міф?</p>
				                        <p className="text2">Ейфорія бігуна викликає суперечки у біговому співтоваристві та у науковому світі с 70-х років минулого століття.</p>
				                    </a>
				                </div>
				                <div className="author-of-news2">
				                    <a href="" className="author-images2">
				                        <img src={author4} alt=""/>
				                    </a>
				                    <div className="author-surname-date3">
				                        <a href="" className="author-surname2">Сергій Богданов</a>
				                        <p className="date2">Травень 11, 2019 07:05</p>
				                    </div>
				                    <a href="">
				                        <img src="images/more.jpg" alt="" className="more3"/>
				                    </a>
				                </div>
				            </div>
				        </div>
				        <div className="third-block-news">
				            <div className="row">
				                <div className="image-news3">
				                    <img src={motivation6} alt=""/>
				                    <p className="sort-blog-text">мотивація</p>
				                    <div className="like-count">
				                        <input type="button" className="like"/>
				                        21
				                    </div>
				                </div>
				                <div className="news3">
				                    <a href="">
				                        <p className="title2">Чотири техніки читання, які варто використовувати.</p>
				                        <p className="text2">Більшість з нас любить читати під час дозвілля, «смакувати» кожне слово. Однак часто важлива і швидкість і техніки читання.</p>
				                    </a>
				                </div>
				                <div className="author-of-news2">
				                    <a href="" className="author-images2">
				                        <img src={author2} alt=""/>
				                    </a>
				                    <div className="author-surname-date3">
				                        <a href="" className="author-surname2">Віталій Ступка</a>
				                        <p className="date2">Квітень 25, 2019 10:50</p>
				                    </div>
				                    <a href="">
				                        <img src="images/more.jpg" alt="" className="more3"/>
				                    </a>
				                </div>
				            </div>
				        </div>
				        <div className="third-block-news">
				            <div className="row">
				                <div className="image-news3">
				                    <img src={motivation7} alt=""/>
				                    <p className="sort-blog-text">мотивація</p>
				                    <div className="like-count">
				                        <input type="button" className="like"/>
				                        15
				                    </div>
				                </div>
				                <div className="news3">
				                    <a href="">
				                        <p className="title2">20 правил справжніх переможців.</p>
				                        <p className="text2">Пропонуємо вам декілька важливих думок про успіх та лідерство від знаменитого маркетолога, письменника і підприємця Дена Вальдшмідта.</p>
				                    </a>
				                </div>
				                <div className="author-of-news2">
				                    <a href="" className="author-images2">
				                        <img src={author1} alt=""/>
				                    </a>
				                    <div className="author-surname-date3">
				                        <a href="" className="author-surname2">Орест Левицький</a>
				                        <p className="date2">Травень 01, 2019 21:25</p>
				                    </div>
				                    <a href="">
				                        <img src="images/more.jpg" alt="" className="more3"/>
				                    </a>
				                </div>
				            </div>
				        </div>
				        <div className="fourth-block-news">
				            <div className="row">
				            	<div className="image-news4">
				                    <img src={motivation8} alt=""/>
				                    <p className="sort-blog-text">мотивація</p>
				                    <div className="like-count">
				                        <input type="button" className="like"/>
				                        25
				                    </div>
				                </div>
				                <div className="news4">
				                    <a href="">
				                        <p className="title2">Давид проти Голіафа: як змінити культуру організації?</p>
				                        <p className="text2">Засновник Know Your Company пояснює, як будь-який співробітник може домогтися, щоб колеги вели себе інакше. Часто говорять, що «культура починається зверху». Але чи дійсно це так?</p>
				                    </a>
				                </div>
				                <div className="author-of-news2">
				                    <a href="" className="author-images2">
				                        <img src={author2} alt=""/>
				                    </a>
				                    <div className="author-surname-date4">
				                        <a href="" className="author-surname2">Віталій Ступка</a>
				                        <p className="date2">Квітень 31, 2019 15:10</p>
				                    </div>
				                    <a href="">
				                        <img src="images/more.jpg" alt="" className="more4"/>
				                    </a>
				                </div>
				            </div>
				        </div>
				       	<div className="fourth-block-news">
				            <div className="row">
				            	<div className="image-news4">
				                    <img src={motivation9} alt=""/>
				                    <p className="sort-blog-text">мотивація</p>
				                    <div className="like-count">
				                        <input type="button" className="like"/>
				                        17
				                    </div>
				                </div>
				                <div className="news4">
				                    <a href="">
				                        <p className="title2">План самоосвіти, як запорука успіху для досягнення поставленої мети.</p>
				                        <p className="text2">Може здатися, що складання плану - це зайва робота, адже можна просто купити книги по темі і почати їх вивчати. Одна з проблем самоосвіти в тому, що, не маючи плану, дуже легко заплутатися.</p>
				                    </a>
				                </div>
				                <div className="author-of-news2">
				                    <a href="" className="author-images2">
				                        <img src={author3} alt=""/>
				                    </a>
				                    <div className="author-surname-date4">
				                        <a href="" className="author-surname2">Олексій Зінчук</a>
				                        <p className="date2">Травень 7, 2019 14:07</p>
				                    </div>
				                    <a href="">
				                        <img src="images/more.jpg" alt="" className="more4"/>
				                    </a>
				                </div>
				            </div>
				        </div>
				        <div className="more-posts">
				            <div className="more-post-text">
				                Більше
				            </div>
				            <div className="more-post-button">
				                <input type="button" className="button-ellipse"/>
				            </div>
				        </div>
				    </div>
                    <div className="col-m-lg-3">
                        <div className="search">
				            <input type="text" placeholder="Пошук" className="pole"/>
				            <input type="button" className="button-search"/>
				        </div>
				        <div className="categoris">
				            <p>Блоги</p>
				            <ul>
								<li><Link to="/allblogs">Усі блоги</Link></li>
				                <li><a href="">Наука</a></li>
				                <li><a href="">Цікаво</a></li>
				                <li><a href="">Корисно</a></li>
				                <li><a href="">Мотивація</a></li>
				                <li><a href="">Натхення</a></li>
				            </ul>
				        </div>
				        <div className="subscribe">
				            <p className="subscribe-text">Підписатися</p>
				            <p className="subscribe-name">Ваше ім'я</p>
				            <input type="text" placeholder="Ірина Гуцол" className="pole-1"/>
				            <p className="subscribe-name">Email</p>
				            <input type="text" placeholder="Email@adress.com" className="pole-1"/>
				            <input type="button" value="Підписатися" className="pole-2"/>
				            <p className="or">or</p>
				            <a href="https://www.facebook.com/">
				                <img src={facebook} alt=""/>
				            </a>
				            <a href="https://twitter.com/">
				                <img src={twitter} alt=""/>
				            </a>
				            <a href="https://www.pinterest.com/">
				                <img src={pinterest} alt=""/>
				            </a>
				            <a href="https://dribbble.com/">
				                <img src={dribbble} alt=""/>
				            </a>
				        </div>
				        <div className="popular-post-title">
				            <p>Популярні записи</p>
				        </div>
				        <div className="popular-post-image">
							<img src={pp2} alt="" className="imag"/>
							<p className="date2">Квітень 31, 2019 23:35</p>
							<a href="">
								<p className="title-3">Бути щасливим просто! :)</p>
							</a>
						</div>
						<div className="popular-post-image">
							<img src={pp1} alt="" className="imag"/>
							<p className="date2">Травень 10, 2019 20:07</p>
							<a href="">
								<p className="title-3">Що буде, якщо віджиматися місяць по 100 разів в день?</p>
							</a>
						</div>
						<div className="popular-post-image">
							<img src={pp3} alt="" className="imag"/>
							<p className="date2">Травень 05, 2019 10:43</p>
							<a href="">
								<p className="title-3">Переваги та недоліки віддаленої роботи вдома.</p>
							</a>
						</div>
						<div className="popular-post-image">
							<img src={pp4} alt="" className="imag"/>
							<p className="date2">Травень 11, 2019 12:35</p>
							<a href="">
								<p className="title-3">Як переконати себе продовжувати займатись.</p>
							</a>
						</div>
						<div className="tags">
				            <p>Теги</p>
				            <a href="">Щастя</a>
				            <a href="">Корисно</a>
				            <a href="">Гори</a>
				            <a href="">Youtube</a>
				            <a href="">Сміх</a>
				            <a href="">Наука</a>
				            <a href="">Подорож</a>
				            <a href="">Кава</a>
				            <a href="">Море</a>
				        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <div className="footer">
            <div className="col-1-footer">
                Підпишіться на нашу розсилку
            </div>
            <div className="col-2-footer">
                <input type="email" placeholder="Email Adress" className="pole-3"/>
            </div>
            <div className="col-3-footer">
            <input type="button" value="Підписатися" className="pole-4"/>
            </div>
        </div>
    </footer>
    </div>
    );
}

export default MotivationPage;