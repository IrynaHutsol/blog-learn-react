import React from 'react';
import {Route} from 'react-router-dom'

import './../common/style/reset.css';
import './../common/style/base.css';
import App1 from './App1';
import MotivationPage from './MotivationPage/MotivationPage';


const App =() => {
	return (
	<div>
		<Route exact path="/" component={App1}/>
		<Route path="/motivation" component={MotivationPage}/>
	</div>
	);
}

export default App;
