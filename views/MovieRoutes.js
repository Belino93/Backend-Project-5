const express = require('express')
const router = express.Router()
const MovieController = require('../controllers/MovieController')


// All Movies
router.get('/', MovieController.getMovies)

// Top rated movies
router.get('/top', MovieController.getTopRatedMovies)

// Busqueda por ID
router.get('/id/:id', MovieController.getMovie)

// Busqueda por titulo
router.get('/title/:title', MovieController.getMovieByTitle)

// Busqueda por genero
router.get('/genre/:genre', MovieController.getMovieByGenre)



module.exports = router