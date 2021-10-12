const { Router } = require('express');
const { check } = require('express-validator');

const { validarJWT, validarCampos } = require('../middlewares');

const { crearVideo,
	obtenerVideos,
	obtenerVideo,
	actualizarVideo,
	borrarVideo,
	descargarVideo,
	valoracion } = require('../controllers/videos');

const { existeCategoriaPorId, existeVideoPorId } = require('../helpers/db-validators');

const router = Router();


//  Obtener todas los videos - publico
router.get('/', obtenerVideos);

// Obtener un video por id - publico
router.get('/:id',
	//  [
	// 	check('id', 'No es un id de Mongo válido').isMongoId(),
	// 	check('id').custom(existeVideoPorId),
	// 	validarCampos,
	// ],
	obtenerVideo);


// descargar un video por id - publico
router.get('/download/:id',
	//  [
	// 	check('id', 'No es un id de Mongo válido').isMongoId(),
	// 	check('id').custom(existeVideoPorId),
	// 	validarCampos,
	// ],
	descargarVideo);

// Crear categoria - privado - cualquier persona con un token válido
router.post('/',
	// [
	// 	validarJWT,
	// 	// check('nombre', 'El nombre es obligatorio').not().isEmpty(),
	// 	validarCampos
	// ],
	crearVideo);

// Actualizar - privado - cualquiera con token válido
router.put('/:id',
	// [
	// 	validarJWT,
	// 	check('id').custom(existeVideoPorId),
	// 	validarCampos
	// ],
	actualizarVideo);

// Borrar una categoria - Admin
router.delete('/:id',
	// [
	// 	validarJWT,
	// 	check('id', 'No es un id de Mongo válido').isMongoId(),
	// 	check('id').custom(existeVideoPorId),
	// 	validarCampos,
	// ],
	borrarVideo);

router.put('/valoracion/:id',
	// [
	// 	validarJWT,
	// 	check('id', 'No es un id de Mongo válido').isMongoId(),
	// 	check('id').custom(existeVideoPorId),
	// 	validarCampos,
	// ],
	valoracion);

module.exports = router;