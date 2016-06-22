var express = require('express');
var router = express.Router();

var Blog = require('../../../models/blog/blog');
// Route to get all movies and save a movie
router.route('/home')
// Get all movies
    .get(function(req, res){
      console.log("inside get");
      Blog.find(function(err, blogs) {
            if (err)
                res.send(err);
                console.log("blogList="+JSON.stringify(blogs));
            res.json(blogs);

        });
    })

/*
var imdbObj = require('node-movie');
var Movie = require('../../../models/movies/movie');
// Route to get all movies and save a movie
router.route('/movies')
// Get all movies
    .get(function(req, res){
      Movie.find(function(err, movies) {
            if (err)
                res.send(err);
                //console.log("moviesList="+JSON.stringify(movies));
            res.json(movies);

        });
    })
// Search and save the movie
  .post(function(req, res) {
        imdbObj(req.body.Title, function (err, data) {
        if (data){
        var movie = new Movie();
        movie.Title = data.Title;
        movie.Year =  data.Year;
        movie.Rated = data.Rated;
        movie.Released = data.Released;
        movie.Runtime = data.Runtime;
        movie.Genre = data.Genre;
        movie.Director = data.Director;
        movie.Writer = data.Writer;
        movie.Actors = data.Actors;
        movie.Plot = data.Plot;
        movie.Language = data.Language;
        movie.Country = data.Country;
        movie.Awards = data.Awards;
        movie.Poster = data.Poster;
        movie.Metascore = data.Metascore;
        movie.imdbRating = data.imdbRating;
        movie.imdbVotes = data.imdbVotes;
        movie.imdbID = data.imdbID;
        movie.Type = data.Type;
        movie.Response = data.Response;
        movie.save(function(err) {
            if (err)
                res.send(err);
            res.json({ message: 'Movie added!' });
              });
            }else {
              res.send(err);
            }
            });
        });
// Route to get all movies and save a movie
    router.route('/movies/:movie_id')
// Get the movie by id
          .get(function(req, res) {
            Movie.findById(req.params.movie_id, function(err, movie) {
                if (err)
                    res.send(err);
                res.json(movie);
            });
        })
// Update the movie by id
        .put(function(req, res) {
        Movie.findById(req.params.movie_id, function(err, movie) {
            if (err)
                res.send(err);
            movie.Title = 'Hello';
            movie.save(function(err) {
                if (err)
                    res.send(err);
                res.json({ message: 'Movie updated!' });
            });
        });
    })
// Delete the movie by id
    .delete(function(req, res) {
        console.log("req.params.movie_id="+req.params.movie_id);
        Movie.remove({
            imdbID: req.params.movie_id
        }, function(err, movie) {
            if (err)
                res.send(err);
            res.json({ message: 'Successfully deleted' });
        });
    });

router.route('/getMovie')
  .post(function(req, res) {
    console.log("req.body.Title="+req.body.Title);
      imdbObj(req.body.Title, function (err, data) {
      if (data){
          res.json(data);
          }else {
            res.send(err);
          }
          });
      });


      // Search and save the movie
router.route('/addMovie')
        .post(function(req, res) {
console.log("inside addMovie route ="+req.body.Title);
              var movie = new Movie({
              Title : req.body.Title,
              Year :  req.body.Year,
              Rated  : req.body.Rated,
              Released : req.body.Released,
              Runtime : req.body.Runtime,
              Genre : req.body.Genre,
              Director : req.body.Director,
              Writer : req.body.Writer,
              Actors : req.body.Actors,
              Plot : req.body.Plot,
              Language : req.body.Language,
              Country : req.body.Country,
              Awards : req.body.Awards,
              Poster : req.body.Poster,
              Metascore : req.body.Metascore,
              imdbRating : req.body.imdbRating,
              imdbVotes : req.body.imdbVotes,
              imdbID : req.body.imdbID,
              Type : req.body.Type,
              Response : req.body.Response
            });
              movie.save(function(err) {
                  if (err)
                      res.send(err);
                  res.json({ message: 'Movie added!' });
                    });
              });

*/
module.exports= router;
