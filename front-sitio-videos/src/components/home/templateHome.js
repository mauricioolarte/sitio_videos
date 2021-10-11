import React, { useState, useEffect } from 'react';

import CardVideo from '../cards/card';
import Row from 'react-bootstrap/Row';


import queryVideos from '../../sources/data/querysHome'



function Home() {

	const [popularV, setPopularV] = useState('');

	const callvalues = async () => {
		const list = await queryVideos();
		console.log(list);
		setPopularV(list);
	}
	callvalues();


	return (

		<>
			<ul>
				<li>
					<h3>videos mas populares</h3>
					<Row>
						<CardVideo></CardVideo>
						<CardVideo></CardVideo>
						<CardVideo></CardVideo>
					</Row>
				</li>
				<li>
					<h3>videos mas recientes</h3>
					<Row>
						<CardVideo></CardVideo>
						<CardVideo></CardVideo>
						<CardVideo></CardVideo>

					</Row>
				</li>
				<li>
					<h3>mis videos fovoritos</h3>
					<Row>
						<CardVideo></CardVideo>
						<CardVideo></CardVideo>

						<CardVideo></CardVideo>

					</Row>
				</li>
				<li>
					<h3>mis videos</h3>
					<Row>
						<CardVideo></CardVideo>
						<CardVideo></CardVideo>

						<CardVideo></CardVideo>

					</Row>
				</li>
			</ul>






		</>





	)
}

export default Home;