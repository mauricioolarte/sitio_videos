import React, { useState } from 'react';

const axios = require('axios');
const FormData = require('form-data');

function CreateVideo() {

	const [nombre, setNombre] = useState('')
	const [tags, setTags] = useState('')
	const [descripcion, setDescripcion] = useState('')
	const [file, setFile] = useState('')
	const [data, setData] = useState('')



	function handleInputChangeName(e) {
		setNombre(e.target.value)
	}
	function handleInputChangeTags(e) {
		setTags(e.target.value)
	}
	function handleInputChangeDesc(e) {
		setDescripcion(e.target.value)
	}
	function handleInputChangeFile(e) {
		setFile(document.querySelector('#file'));
	}


	function enviarDatos(e) {
		e.preventDefault()

		const url = 'http://localhost:8080/api/videos'
		var formData = new FormData();

		if (file !== '') {
			formData.append('archivo', file.files[0])
		}

		formData.append('tags', tags)
		formData.append('nombre', nombre)
		formData.append('descripcion', descripcion)
		formData.append('usuario', "6162dd2660ac4ca556a3289f")


		axios({
			method: 'post',
			url: url,
			data: formData
		}).then((res) => {
			setData(res.data)
			alert('Video creado con exito')
		});
	}

	return (
		<>
			<h1>crear video</h1>
			<div>
				<form className="row" onSubmit={enviarDatos} >
					<div className="col-md-7">
						<input
							type="text"
							placeholder="Nombre"
							className="form-control"
							onChange={handleInputChangeName}
							name="nombre" />
					</div>
					<div className="col-md-7">
						<input
							type="text"
							placeholder="Tags"
							className="form-control"
							onChange={handleInputChangeTags}
							name="tags" />
					</div>
					<div className="col-md-5">
						<p>* Separa los tags con comas.</p>
					</div>
					<div className="col-md-7">
						<input
							type="text-area"
							placeholder="descripcion"
							className="form-control"
							onChange={handleInputChangeDesc}
							name="descripcion" />
					</div>
					<div className="col-md-7">
						<input
							type="file"
							accept="video/*"
							placeholder="Archivo"
							className="form-control"
							id="file"
							onChange={handleInputChangeFile}
							name="archivo" />
					</div>
					<div className="col-md-5">
						<p>* Solo se permiten archivos de video</p>
					</div>

					<button type="submit" className="btn btn-primary col-md-4 ms-3 mt-5">Enviar</button>
				</form>



			</div>


		</>
	)


}

export default CreateVideo;