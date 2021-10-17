import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



import queryVideoId from '../../../sources/data/querysVieoId'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const axios = require('axios');


function ViewVideo() {
	let { id } = useParams();
	const [data, setData] = useState({})
	const url = 'http://localhost:8080/api/videos/download/' + data.vid

	useEffect(() => {
		queryVideoId(id).then((res) => {
			if (Object.keys(data).length === 0) {
				setData(res);
			}
		});
	}, [data])

	function handleClickLike() {

		if (!localStorage.getItem('usuario')) {
			alert('Para valorar videos debe estar logueado')
		} else {


			const videoId = data.vid;
			const url = "http://localhost:8080/api/videos/valoracion/" + videoId;
			const dataReq = {
				userId: data.usuario._id,
				valoracion: "like"
			}
			axios({
				method: 'put',
				url: url,
				data: dataReq
			}).then((res) => {
				setData(res.data)
			});
		}
	}

	function handleClickDislike() {

		if (!localStorage.getItem('usuario')) {
			alert('Para valorar videos debe estar logueado')
		} else {
			const videoId = data.vid;
			const url = "http://localhost:8080/api/videos/valoracion/" + videoId;
			const dataReq = {
				userId: data.usuario._id,
				valoracion: "dislike"
			}
			axios({
				method: 'put',
				url: url,
				data: dataReq
			}).then((res) => {
				setData(res.data)
			});
		}
	}


	return (
		<>

			<h1>Vista de video</h1>

			<Card fluid>
				<video src={data.url} controls>
				</video>
				<Card.Body>
					<Card.Title><h2>{data.nombre}</h2></Card.Title>

					<Card.Text>
						<p>{data.descripcion}</p>

						<h4>Tags:</h4>
						<p>{data.tags}</p>

					</Card.Text>
					<Button variant="primary" style={{ width: '5rem', margin: '5px' }} onClick={handleClickLike}>Like</Button>
					<Button variant="outline-primary" style={{ width: '5rem', margin: '5px' }} disabled>{data.likesNumber}</Button>
					<Button variant="primary" style={{ width: '5rem', margin: '5px' }} onClick={handleClickDislike}>Dislike</Button>
					<Button variant="outline-primary" style={{ width: '5rem', margin: '5px' }} disabled>{data.dislikesNumber}</Button>
					<a href={url}><Button variant="primary" style={{ width: '10rem', margin: '5px' }} >Download</Button></a>

				</Card.Body>
			</Card>

		</>
	)


}

export default ViewVideo;