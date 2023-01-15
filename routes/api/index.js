var express = require('express');
const router = express.Router();
const movieController= require('../../controllers/api/movieController');
const characterController = require('../../controllers/api/characterController')

/* Rutas de peliculas */
router.get('/movies', movieController.list);
router.get('/detail/:id',movieController.detail)

/* Rutas de personajes */
router.get('/characters',characterController.list)
router.get('/character/:id',characterController.Relation) 
/* router.post('/character/create',apiController.create)
router.put('/character/update/:id', apiController.updateCharacter);  */

module.exports = router