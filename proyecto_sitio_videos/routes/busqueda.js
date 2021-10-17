const { Router } = require('express');

const { busqueda } = require('../controllers/busqueda')

const router = Router();

router.post('/', busqueda)

module.exports = router;
