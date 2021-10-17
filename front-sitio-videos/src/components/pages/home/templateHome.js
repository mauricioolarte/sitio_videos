import React, { useState, useEffect } from 'react';

import CardVideo from '../../cards/card';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';


import queryVideos from '../../../sources/data/querysHome'



function Home() {

	// const data = [{
	// 	nombre: "nombre",
	// 	url: "http://www.example.com",
	// 	descripcion: "descripcion",
	// 	id: "3333"
	// }]

	const [popularV, setPopularV] = useState([]);


	queryVideos().then((data) => {
		if (Array.isArray(popularV) && popularV.length === 0) {
			setPopularV(data);
		}
		return data
	});

	return (

		<>
			<ul>
				<li>
					<h3 className="mt-3">videos mas populares</h3>
					<Row>
						{
							Array.isArray(popularV) ?
								popularV.map(element => {
									return <CardVideo data={element}></CardVideo>
								}) : (<Spinner animation="border" />)
						}

					</Row>
				</li>
				<li>
					<h3 className="mt-3">videos mas recientes</h3>
					<Row>


					</Row>
				</li>
				<li>
					<h3 className="mt-3">mis videos fovoritos</h3>
					<Row>

					</Row>
				</li>
				<li>
					<h3 className="mt-3">mis videos</h3>
					<Row>

					</Row>
				</li>
			</ul>






		</>





	)
}

export default Home;