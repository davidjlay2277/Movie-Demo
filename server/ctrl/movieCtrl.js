//this is setting the array in db.json to a variable called movies
// now movies is an array

const movies = require("./db.json");

//why is this here....?
// // get all movies needs to be part of this object'
let id = 11;

module.exports = {
  getAllMovies: (req, res) => {
    res.status(200).send(movies);
  },
  createMovie: (req, res) => {
    const { title, rating, imageURL } = req.body;
    req.body.id = id;
    console.log(req.body);
    movies.push(req.body);
    //the next line needs the "push" to compelte. This could result in a race condition, which could be solved with a callback or a promise.
    res.status(200).send(movies);
  },
  //does not delete the object within movies.
  deleteMovie: (req, res) => {
    const id = +req.params.id;
    const index = movies.findIndex((e) => e.id === id);

    movies.splice(index, 1);
    res.status(200).send(movies);
  },
  updateRating: (req, res) => {
    const id = +req.params.id;
    const { type } = req.body;
    const index = movies.findIndex((e) => e.id === id);

    if (type === "minus" && movies[index].rating > 1) {
        movies[index].rating -= 1;
    }
    if (type === "plus" && movies[index].rating < 5) {
        movies[index].rating += 1;
    }
    res.status(200).send(movies);
    //  movies.splice(index,1,)
  },
};
