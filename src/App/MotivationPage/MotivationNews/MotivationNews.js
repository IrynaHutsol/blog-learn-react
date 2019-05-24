import React from 'react';
import './MotivationNews.css';
import facebookHeader from './images/facebookHeader.png';
import twitterHeader from './images/twitterHeader.png';
import pinterestHeader from './images/pinterestHeader.png';
import googleHeader from './images/googleHeader.png';
import instagramHeader from './images/instagramHeader.png';
import logo from './images/logo.png';
import singIn from './images/singin.png';
import motivation1 from './images/motivation1.png';
import author3 from './images/author3.jpg';
import facebook from './images/facebook.png';
import twitter from './images/twitter.png';
import pinterest from './images/pinterest.png';
import dribbble from './images/dribbble.png';
import pp1 from './images/pp1.jpg';
import pp2 from './images/pp2.png';
import pp3 from './images/pp3.jpg';
import pp4 from './images/pp4.jpg';
import more from './images/more.jpg';
import {Link} from 'react-router-dom';


const MotivationNews =()=> {
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
                <div className="bg-header-news-imag">
                    <div className="container bg-news-imag">
                        <div className="col-lg-3">
                            <div className="logo-container">
                                <a href="" className="logo-news">
                                    <img src={logo} alt="PASCO"/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="menu">
                                <ul className="nav-news">
                                    <li><Link to="/allBlogs">Усі блоги</Link></li>
                                    <li><a href="">Наука</a></li>
                                    <li><a href="">Цікаво</a></li>
                                    <li><a href="">Корисно</a></li>
                                    <li><Link to="/motivation">Мотивація</Link></li>
                                    <li><a href="">Натхнення</a></li>
                                </ul>
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
                                <div className="first-block-news-news">
                                    <div className="image-news">
                                        <img src={motivation1} alt="мотивація"/>
                                        <p className="sort-blog-text">Мотивація</p>
                                        <div className="like-count">
                                            <input type="button" className="like"/>
                                            17
                                        </div>
                                    </div>
                                    <div className="news-news">
                                        <p className="title-news">Як ідеально облаштувати робоче місце?</p>
                                        <div className="text-news">
                                        <p> Від того, як ви змогли облаштувати робоче місце, буде залежати ефективність праці. Психологи вже не один раз стверджували, що вдала організація простору має безпосередній вплив на ефективність роботи.Тому радимо перед виконанням важливих справ створити оптимальну робочу атмосферу.</p>
                                        <p> А ми розкажемо вам, як це зробити за допомогою: врахування своїх смакових вподобань; кольору та світла; кімнатних рослин; підтримки порядку; створення відчуття усамітнення; вдало підібраного робочого столу та крісла; музики. </p>
                                        <p> Щоб облаштувати робоче місце, враховуйте свої вподобання! </p>
                                        <p> Британські дослідники з’ясували, що ефективніше працюють ті працівники, яким дозволили самостійно облаштувати свій робочий простір. Продуктивність щасливчиків піднялась на  30%. Крім того, працівники стали не тільки більш продуктивно виконувати свої обов’язки, але й почали більш позитивно ставитись до керівництва. </p>
                                        <p> Враховуйте психологічні впливи кольору та освітлення! </p>
                                        <p> На працездатність сильно впливає колір стін та стелі. Найлегше зосередитись на деталях у приміщенні, де переважають блакитні відтінки. В жовтому середовищі думки стануть чіткішими. Якщо вам потрібна спокійна атмосфера для роботи, то пофарбуйте стіни свого робочого кабінету в сірий колір. Також на робочий процес впливає освітлення. В яскравому приміщенні  краще працює аналітичне та критичне мислення. </p>
                                        <p> Локальне світло, яке створює трохи розмитий фон, посилює відчуття свободи. Такий фокус можна застосовувати, якщо вам необхідно знайти творче рішення.  Тим, кому пощастило працювати вдома, бажано облаштувати своє робоче місце біля вікна. Яким би яскравим не було штучне освітлення, тільки сяяння сонця здатне ефективно відігнати сонливість та зберегти ваш зір гострим. Якщо можливість поставити стіл біля вікна відсутня, то слід повісити над ним дзеркало. Це дасть змогу збільшити кількість денного світла в кімнаті. </p>
                                        <p> Кімнатні рослини допоможуть зосередитись! </p>
                                        <p> Якщо ви працюєте в офісі, то кімнатні рослини не тільки створять більш теплу, домашню та комфорту атмосферу, але й покращать стан повітря. Наявність кімнатних рослин допомагає зняти стрес, або попередити ймовірність його виникнення. Для позитивного результату достатньо оздобити робочий простір декількома улюбленими рослинами. </p>
                                        <p> Крім того, хороші умови для роботи забезпечує пейзаж за вікном. Вигляд зеленого парку чи ботанічного саду допоможе зосередити власні думки на виконанні найважливіших завдань. Якщо ж за вашими вікнами знаходяться стіни сусідніх будинків чи шосе, то можна розмістити картинки з природою на своєму робочому столі. </p>
                                        <p> Дотримання порядку та продуктивність! </p>
                                        <p> Хоча багато творчих особистостей стверджують, що потребують для ефективної роботи певного хаосу на робочому столі, це не означає, що потрібно захаращувати робочий простір паперами, довідниками, їжею та порожнім посудом. В таких умовах доволі складно знайти потрібний предмет чи нотатку, а це суттєво гальмує робочий процес. Щоб ідеально облаштувати робоче місце необхідно потурбуватися про впорядкування речей довкола нього. </p>
                                        <p> Для впорядкування власних думок психологи радять спробувати прибрати в себе на робочому столі, сховати всі зайві предмети, залишивши лише потрібні для праці підручні матеріали. </p>
                                        <p> Відчуття усамітнення та продуктивність! </p>
                                        <p> Щоб ідеально облаштувати робоче місце, слід потурбуватись про наявність простору для усамітнення. Якщо у вас немає окремої кімнати чи офісу для роботи, то ситуацію можна вирішити за допомогою ширми. Її можна поставити в себе за спиною. Це не тільки подарує відчуття усамітнення, але й допоможе  зберегти психологічний комфорт.  Замість ширми можна використати шафу з книжками. </p>
                                        <p> Зверніть увагу на розміру столу та крісла! </p>
                                        <p> Оптимальна висота робочого столу повинна мати 75 сантиметрів, а ширина від 50 сентиментів. Добре, якщо в столі будуть додаткові відділення для робочих предметів. Бажано, щоб стілець мав ніжки а не колеса, а також був ортопедичним. </p>   
                                        <p> Де має бути комп’ютер?</p>
                                        <p> Системний блок від ПК повинен знаходився під столом. Монітор розташуйте на відстані 50-75 сантиметрів від очей. </p>
                                        <p> Зверніть увагу, як розташовані на робочому столі вашого комп’ютера файли та папки. Неструктуровані файли суттєво гальмують робочий процес. Створюйте резервні копії своїх напрацювань. Це допоможе уникнути втрати цінної інформації. При можливості скануйте важливі документи.</p>                             
                                        </div>
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
                                            <img src={more} alt="" className="more"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="more-posts">
                                    <div className="more-post-text">
                                        Наступний запис
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
                                        <li><Link to="/allBlogs">Усі блоги</Link></li>
                                        <li><a href="">Наука</a></li>
                                        <li><a href="">Цікаво</a></li>
                                        <li><a href="">Корисно</a></li>
                                        <li><Link to="/motivation">Мотивація</Link></li>
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

export default MotivationNews;