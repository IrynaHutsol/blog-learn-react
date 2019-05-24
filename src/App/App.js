import React from 'react';
import {Route} from 'react-router-dom'

import './../common/style/reset.css';
import './../common/style/base.css';
import App1 from './App1';
import MotivationPage from './MotivationPage/MotivationPage';
import MotivationNews from './MotivationPage/MotivationNews/MotivationNews';


const App =() => {
	return (
	<div>
		<Route exact path="/" component={App1}/>
		<Route path="/allBlogs" component={App1}/>
		<Route path="/motivation" component={MotivationPage}/>
		<Route path="/motivationNews" component={MotivationNews}/>
	</div>
	);
}

export default App;
