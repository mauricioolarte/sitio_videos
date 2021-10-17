const { response, request } = require('express');
const bcryptjs = require('bcryptjs');


const Usuario = require('../models/usuario');



const usuariosGet = async (req = request, res = response) => {

	const { limite = 5, desde = 0 } = req.query;
	const query = { estado: true };

	const [total, usuarios] = await Promise.all([
		Usuario.countDocuments(query),
		Usuario.find(query)
			.skip(Number(desde))
			.limit(Number(limite))
	]);

	res.json({
		total,
		usuarios
	});
}

const usuariosPost = async (req, res = response) => {

	console.log(req.body)
	const { nombre, correo, password } = req.body;
	const usuario = new Usuario({ nombre, correo, password });

	// Encriptar la contraseña
	const salt = bcryptjs.genSaltSync();
	usuario.password = bcryptjs.hashSync(password, salt);

	// Guardar en BD
	await usuario.save();

	res.json({
		usuario
	});
}

const usuariosPut = async (req, res = response) => {

	const { id } = req.params;
	const { _id, password, correo, ...values } = req.body;

	if (password) {
		// Encriptar la contraseña
		const salt = bcryptjs.genSaltSync();
		values.password = bcryptjs.hashSync(password, salt);
	}

	const usuario = await Usuario.findByIdAndUpdate(id, values);
	const respUsuario = await Usuario.findById(id);

	res.json(respUsuario);
}


const usuariosDelete = async (req, res = response) => {

	const { id } = req.params;
	const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });
	const respUsuario = await Usuario.findById(id);

	res.json(respUsuario);
}




module.exports = {
	usuariosGet,
	usuariosPost,
	usuariosPut,
	usuariosDelete,
}