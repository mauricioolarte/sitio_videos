import React, { useState } from 'react';

const axios = require('axios');
const FormData = require('form-data');



function RegisterPage() {

	const [correo, setCorreo] = useState('')
	const [nombre, setNombre] = useState('')

	const [password, setPassword] = useState('')
	const [data, setData] = useState('')



	function handleInputChangeNombre(e) {
		setNombre(e.target.value)
	}
	function handleInputChangeCorreo(e) {
		setCorreo(e.target.value)
	}
	function handleInputChangePassword(e) {
		setPassword(e.target.value)
	}


	function enviarDatos(e) {
		e.preventDefault()

		const url = 'http://localhost:8080/api/usuarios'

		console.log(nombre, password, correo)

		axios({
			method: 'post',
			url: url,
			data: { nombre, password, correo }
		}).then((res) => {
			setData(res.data)
			console.log(res.data)
			alert('usuario creado con exito')
		});
	}


	return (
		<>
			<h1 className="mt-3 text-center">Login page</h1>
			<div>
				<form className="row" onSubmit={enviarDatos} >
					<div className="col-md-7">
						<input
							type="text"
							placeholder="Nombre"
							className="form-control"
							onChange={handleInputChangeNombre}
							name="nombre" />
					</div>
					<div className="col-md-7">
						<input
							type="text"
							placeholder="Correo"
							className="form-control"
							onChange={handleInputChangeCorreo}
							name="correo" />
					</div>
					<div className="col-md-7">
						<input
							type="password"
							placeholder="Password"
							className="form-control"
							onChange={handleInputChangePassword}
							name="password" />
					</div>
					<div>
						<button type="submit" className="btn btn-primary col-md-4 ms-3 mt-5" >Enviar</button>

					</div>

				</form>

			</div>
		</>
	)


}

export default RegisterPage;