const express = require('express');
const path = require('path')
const cors = require('cors');
const fileUpload = require('express-fileupload');

const { dbConnection } = require('../database/config');

class Server {

	constructor() {
		this.app = express();
		this.port = process.env.PORT;

		this.paths = {
			auth: '/api/auth',
			// buscar: '/api/buscar',
			videos: '/api/videos',
			usuarios: '/api/usuarios',
			uploads: '/api/uploads',
		}


		// Conectar a base de datos
		this.conectarDB();

		// Middlewares
		this.middlewares();

		// Rutas de mi aplicación
		this.routes();
	}

	async conectarDB() {
		await dbConnection();
	}


	middlewares() {

		// CORS
		this.app.use(cors());

		// Lectura y parseo del body
		this.app.use(express.json());

		// Directorio Público
		this.app.use(express.static('public'));
		this.app.use('/assets', express.static('assets'));



		//Fileupload - Carga de archivos
		this.app.use(fileUpload({
			useTempFiles: true,
			tempFileDir: '/tmp/',
			createParentPath: true
		}));

	}

	routes() {

		this.app.use(this.paths.auth, require('../routes/auth'));
		this.app.use(this.paths.videos, require('../routes/videos'));
		this.app.use(this.paths.usuarios, require('../routes/usuarios'));
		this.app.use(this.paths.uploads, require('../routes/uploads'));
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log('Servidor corriendo en puerto', this.port);
		});
	}

}




module.exports = Server;
