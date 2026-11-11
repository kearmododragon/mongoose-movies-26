const Movie = require('../models/Movie')

module.exports = {
    index,
    new: newMovie,
    create
}

function index(req, res) {
    Movie.find({})
    .then(function(allMovies){
        res.render("movies/index", {
    movies: allMovies,
    title: "All Movies"
})
    })
}

function newMovie(req, res) {
    res.render("movies/new", { title: "Enter a new movie" })
}

function create(req, res) {
    req.body.cast = req.body.cast.trim()
    if (req.body.cast) req.body.cast = req.body.cast.split(',').map(function (cast) { return cast.trim() })
    console.log(req.body)
    Movie.create(req.body)
        .then(function (newMovie) {
            console.log(newMovie)
            res.redirect('/movies')
        })
        .catch(function (err) {
            res.redirect('/')
        })

}