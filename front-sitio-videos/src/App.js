import React from 'react';
import {
	BrowserRouter as Router,
	Route
} from "react-router-dom";

import Container from 'react-bootstrap/Container'

import Header from './components/header/header';
import Body from './components/body/body';

import Home from './components/pages/home/templateHome';



function App() {
	return (
		<>

			<Container fluid>
				<div>
					<Header />
					<Body />
				</div>
			</Container>

		</>
	);
}

export default App;
