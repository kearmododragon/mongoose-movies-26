module.exports = {
    index,
    new: newMovie
}

function index (req, res) {
    res.send("hitting movies index")
}

function newMovie(req, res){
    res.render("movies/new", {title: "Enter a new movie"})
}

