import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect
} from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


function CardVideo(props) {

	console.log(props)

	return (
		<>
			<Card style={{ width: '18rem' }}>
				<video src={props.data.url} >
				</video>
				<Card.Body>
					<Card.Title>{props.data.nombre}</Card.Title>
					<Card.Text>
						{props.data.descripcion}
					</Card.Text>
					<Link to={'view/' + props.data.vid}><Button variant="primary" >Ver video</Button></Link>
				</Card.Body>
			</Card>

		</>
	)
}

export default CardVideo;