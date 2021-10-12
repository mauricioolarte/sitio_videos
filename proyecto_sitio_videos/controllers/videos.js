const { response } = require('express');
const { Video } = require('../models');
const { subirArchivo } = require('../helpers/subir-archivo');
const { Usuario } = require('../models');

const obtenerVideos = async (req, res = response) => {

	const { limite = 20, desde = 0 } = req.query;
	const query = { estado: true };

	const [total, Videos] = await Promise.all([
		Video.countDocuments(query),
		Video.find(query)
			.populate('usuario', 'nombre')
			.skip(Number(desde))
			.limit(Number(limite))
	]);

	res.json({
		total,
		Videos
	});
}

const obtenerVideo = async (req, res = response) => {

	const { id } = req.params;
	const video = await Video.findById(id)
		.populate('usuario', 'nombre');

	res.json(video);

}

const descargarVideo = async (req, res = response) => {

	const { id } = req.params;
	const video = await Video.findById(id)
		.populate('usuario', 'nombre');
	const urlSplit = video.url.split('/');
	const videoName = urlSplit[urlSplit.length - 1]
	console.log(videoName)
	const file = `${process.env.PATH_PROJECT}/assets/videos/${videoName}`
	res.download(file);

}

const crearVideo = async (req, res = response) => {

	const { estado, usuario, tags, ...body } = req.body;
	console.log(body)

	const VideoDB = await Video.findOne({ nombre: body.nombre });
	const usuarioDB = await Usuario.findById(usuario);

	if (VideoDB) {
		return res.status(400).json({
			msg: `El Video ${VideoDB.nombre}, ya existe`
		});
	}
	const autorizedExtensions = ['webm', 'mp4', 'flv', 'mkv'];
	console.log(tags)
	const newTags = tags.split(',');
	const nuevonombre = await subirArchivo(req.files, autorizedExtensions, "videos")
	const url = 'http://localhost:3000/assets/videos/' + nuevonombre;
	console.log(url)
	// Generar la data a guardar
	const data = {
		...body,
		url,
		usuario: usuarioDB,
		tags: newTags,
	}

	const video = new Video(data);

	// Guardar DB
	await video.save();

	res.status(201).json(video);

}

const actualizarVideo = async (req, res = response) => {

	const { id } = req.params;
	const { estado, usuario, tags, ...data } = req.body;

	const VideoDB = await Video.findOne({ nombre: req.body.nombre });
	const video = await Video.findById(id)
	if (video.nombre !== data.nombre && !VideoDB) {
		const newTags = tags.split(',');
		data.tags = newTags;

		const video = await Video.findByIdAndUpdate(id, data, { new: true });
		res.json(video);
	}


	res.status(403).json(`el nombre ${req.body.nombre} ya existe`);

}

const borrarVideo = async (req, res = response) => {

	const { id } = req.params;
	const VideoBorrado = await Video.findByIdAndUpdate(id, { estado: false }, { new: true });

	res.json(VideoBorrado);
}

const valoracion = async (req, res = response) => {

	const { valoracion, userId, ...data } = req.body;
	const { id } = req.params;
	const video = await Video.findById(id);

	let likesNumber = video.likesNumber;
	let dislikesNumber = video.dislikesNumber;
	let userlikes = video.userlikes;
	let userdislikes = video.userdislikes;

	if (valoracion == "like") {
		const index = userlikes.indexOf(userId);
		console.log(index)
		if (index >= 0) {
			userlikes.splice(index, 1);
			likesNumber = userlikes.length;
		} else {
			userlikes.push(userId);
			likesNumber = userlikes.length;
			console.log(likesNumber);
		}
	} else {

		const index = userdislikes.indexOf(userId);
		console.log(index)
		if (index >= 0) {
			userdislikes.splice(index, 1)
			dislikesNumber = userdislikes.length
		} else {
			userdislikes.push(userId)
			dislikesNumber = userdislikes.length
			console.log(likesNumber)
		}


	}
	const videoActualizado = await Video.findByIdAndUpdate(id, {
		userlikes,
		userdislikes,
		likesNumber,
		dislikesNumber
	}, { new: true })
	res.json(videoActualizado)
}

module.exports = {
	crearVideo,
	obtenerVideos,
	obtenerVideo,
	actualizarVideo,
	borrarVideo,
	descargarVideo,
	valoracion
}