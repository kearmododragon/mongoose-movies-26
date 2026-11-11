//testing functions in mongoose

const mongoose = require("mongoose")

require('dotenv').config()

require("./config/database")

const Movie = require("./models/Movie")

function create(data){
    Movie.create(data).then(function(newMovie){
        console.log("data from database", newMovie)
    })
}

//create({ title: "hackers 3"})

function index() {
    Movie.find({}).then(function(allMovies){
        console.log(allMovies)
    }).catch
}

//index()

function getOne(id){
    Movie.findById("6af4c2cdf2348f1e9f810b71").then(function(foundMovie){
        console.log(foundMovie)
    })
    .catch(function(err){
        console.log(err);
    })
    .finally(function(){
        mongoose.connection.close()
    })
}

getOne()