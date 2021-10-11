const { Usuario, Video } = require('../models');


/**
 * Valida si Email existe en BD
 */
const emailExiste = async (correo = '') => {

	// Verificar si el correo existe
	const existeEmail = await Usuario.findOne({ correo });
	if (existeEmail) {
		throw new Error(`El correo: ${correo}, ya está registrado`);
	}
}
/**
 * Valida si usuario esta en BD
 */
const existeUsuarioPorId = async (id) => {

	// Verificar si el correo existe
	const existeUsuario = await Usuario.findById(id);
	if (!existeUsuario) {
		throw new Error(`El id no existe ${id}`);
	}
}


/**
 * Valida si video existe
 */
const existeVideoPorId = async (id) => {

	// Verificar si el correo existe
	const existeVideo = await Video.findById(id);
	if (!existeVideo) {
		throw new Error(`El id no existe ${id}`);
	}
}

module.exports = {
	emailExiste,
	existeUsuarioPorId,
	existeVideoPorId,
}
