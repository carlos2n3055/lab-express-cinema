const express = require('express')
const router = express.Router()

const Movie = require('./../models/Movie.model')


// Enpoints


// Listado de peliculas
router.get('/', (req, res) => {

    Movie
        .find()
        .then(allMovies => res.render('movies/movies-list', { allMovies }))
        .catch(err => console.log(err))
})


// Detalle de la pelicula
router.get('/details/:movie_id', (req, res) => {

    const movieId = req.params.movie_id

    Movie
        .findById(movieId)
        .then(theMovie => res.render('movies/details', theMovie))
        .catch(err => console.log(err))
})



module.exports = router