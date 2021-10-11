import React from 'react';

import Container from 'react-bootstrap/Container'

import Header from './components/header/header';
import Body from './components/body/body';

import Button from 'react-bootstrap/Button';



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
