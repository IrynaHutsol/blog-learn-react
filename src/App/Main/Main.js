import React from 'react';
import './main.css';
import NewsList from './News/NewsList';

const Main = () => {
    return (
        <main>
            <div className="bg-main">
                <div className="container">
                    <div className="row">
                        <div className="col-m-lg-9">
                            <NewsList/>
                        </div>
                        <div className="col-m-lg-3">
                            Hello
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;