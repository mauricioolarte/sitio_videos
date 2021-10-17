const { response } = require('express');
const { Video } = require('../models');
const { Usuario } = require('../models');



const busqueda = async (req, res = response) => {

	const { terminosBusqueda } = req.body

	let query = await Video.find(
		{
			$text: { $search: terminosBusqueda }
		}
	);

	res.json(query)
}

module.exports = { busqueda };
