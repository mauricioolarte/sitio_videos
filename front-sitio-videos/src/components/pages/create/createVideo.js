import React, { useState } from 'react';

function CreateVideo() {

	const [nombre, setNombre] = useState('')
	const [tags, setTags] = useState('')
	const [descripcion, setDescripcion] = useState('')



	function handleInputChange(e) {
		setNombre(e.target.value)
		setTags(e.target.value)
		setDescripcion(e.target.value)

		console.log(nombre)
		console.log(tags)

		console.log(descripcion)

	}


	function enviarDatos(e) {
		e.preventDefault()
		console.log('enviando datos')
		console.log(nombre)
		console.log(tags)

		console.log(descripcion)
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
							onChange={handleInputChange}
							name="nombre" />
					</div>
					<div className="col-md-7">
						<input
							type="text"
							placeholder="Tags"
							className="form-control"
							onChange={handleInputChange}
							name="tags" />
					</div>
					<div className="col-md-5">
						<p>* ingresa las palabras separadas por coma.</p>
					</div>
					<div className="col-md-7">
						<input
							type="text-area"
							placeholder="descripcion"
							className="form-control"
							onChange={handleInputChange}
							name="descripcion" />
					</div>
					<div className="col-md-7">
						<input
							type="file"
							accept="video/*"
							placeholder="Archivo"
							className="form-control"
							onChange={handleInputChange}
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