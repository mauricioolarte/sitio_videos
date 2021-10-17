import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import CardVideo from '../../cards/card'
import Container from 'react-bootstrap/Container'
let FormData = require('form-data');

const axios = require('axios')

function SearchVideo() {

	let { id } = useParams();

	const [terminosBusqueda, setTerminoBusqueda] = useState('');
	const [data, setData] = useState('')
	const [spinner, setSpinner] = useState("none")
	const [msgNoResul, setMsgNoResul] = useState('')

	const handleInputChangeDesc = (e) => {
		setTerminoBusqueda(e.target.value);
	}

	const handleSubmit = async (e) => {
		e.preventDefault()


		setSpinner('block')
		setMsgNoResul('')
		setData('')

		const url = 'http://localhost:3000/api/buscar';

		var formData = new FormData();
		formData.append('terminosBusqueda', terminosBusqueda)
		await axios({
			method: 'post',
			url: url,
			data: formData
		}).then((res) => {
			if (Array.isArray(res.data) && res.data.length > 0) {
				setData(res.data)

			} else {
				setMsgNoResul(' su busqueda no arrojo resultados')
			}
			setSpinner('none')
		});

	}

	return (
		<>
			<section>
				<h1 className="mt-3 text-center">search video</h1>
			</section>

			<section>
				<Row className="justify-content-md-center">
					<Col xs={8} md={8} >
						<Form className="d-flex">
							<FormControl
								type="search"
								placeholder="Search"
								className="mr-2"
								aria-label="Search"
								name="terminosBusqueda"
								onChange={handleInputChangeDesc}
							/>
							<Button variant="outline-success" onClick={handleSubmit}>Search</Button>
						</Form>
					</Col>
				</Row>

			</section>
			<section >
				<Row className="justify-content-md-center mt-5">
					<Spinner animation="grow" style={{ display: spinner }} />
				</Row>


			</section>
			<Container fluid>
				<Row>
					{
						Array.isArray(data) && data.length > 0 ?
							data.map(element => {
								return (<><CardVideo data={element}></CardVideo></>)
							}) : (<div>{msgNoResul}</div>)
					}
				</Row>

			</Container>


		</>
	)


}

export default SearchVideo;