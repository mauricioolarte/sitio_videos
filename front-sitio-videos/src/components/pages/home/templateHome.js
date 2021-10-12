import React, { useState, useEffect } from 'react';

import CardVideo from '../../cards/card';
import Row from 'react-bootstrap/Row';


import queryVideos from '../../../sources/data/querysHome'



function Home() {

	// const data = [{
	// 	nombre: "nombre",
	// 	url: "http://www.example.com",
	// 	descripcion: "descripcion",
	// 	id: "3333"
	// }]

	const [popularV, setPopularV] = useState([]);

	console.log(popularV)


	queryVideos().then((data) => {
		if (popularV.length === 0) {
			console.log("kkkkkk");
			// console.log(data);
			setPopularV(data);
		}
		// console.log(popularV)
		return data
	});

	return (

		<>
			<ul>
				<li>
					<h3>videos mas populares</h3>
					<Row>
						{
							popularV.map(element => {
								return <CardVideo data={element}></CardVideo>
							})
						}

					</Row>
				</li>
				<li>
					<h3>videos mas recientes</h3>
					<Row>


					</Row>
				</li>
				<li>
					<h3>mis videos fovoritos</h3>
					<Row>

					</Row>
				</li>
				<li>
					<h3>mis videos</h3>
					<Row>

					</Row>
				</li>
			</ul>






		</>





	)
}

export default Home;