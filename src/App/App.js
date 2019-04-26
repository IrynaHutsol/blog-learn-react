import React from 'react';

import './../common/style/reset.css';
import './../common/style/base.css';

import Header from './Header/Header';
import Main from './Main/Main';

const App =() => {
	return (
	<div>
		<Header/>
		<Main/>
	</div>
	);
}

export default App;
