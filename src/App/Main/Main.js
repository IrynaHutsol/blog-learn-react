import React from 'react';
import './main.css';
import NewsList from './News/NewsList';
import RightSidebar from './RightSidebar/RightSidebar';

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
                            <RightSidebar/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;