import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom'

const axios = require('axios');
function LoginPage() {

	const [correo, setCorreo] = useState('')
	const [password, setPassword] = useState('')
	const [data, setData] = useState('')

	function handleInputChangeCorreo(e) {
		setCorreo(e.target.value)
	}
	function handleInputChangePassword(e) {
		setPassword(e.target.value)
	}


	async function enviarDatos(e) {
		e.preventDefault()

		const url = 'http://localhost:8080/api/auth/login'

		await axios({
			method: 'post',
			url: url,
			data: { password, correo }
		}).then((res) => {
			localStorage.setItem('usuario', JSON.stringify(res.data.usuario));
			console.log(res.data.usuario)
			alert('usuario loguedo con exito')
			setData(res.data.usuario)
		});
	}


	return (
		!localStorage.getItem('usuario') ?
			(
				<>
					<h1 className="mt-3 text-center">Login page</h1>
					<div>
						<form className="row" onSubmit={enviarDatos} >
							<div className="col-md-7">
								<input
									type="text"
									placeholder="correo"
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
								<button type="submit" className="btn btn-primary col-md-4 ms-3 mt-5">Enviar</button>

							</div>

						</form>

					</div>
				</>
			) : <Redirect to="/" />
	)


}

export default LoginPage;