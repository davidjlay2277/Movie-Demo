//external libraries at the top
const express = require("express");
const cors = require("cors");
//imports always got at the top. Import the contorler file
// "require the path we set up to the contorller file"
// simply import the controller file
const movieCtrl = require("./ctrl/movieCtrl");

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 4004;

//tell express to accept a get request from /api/movies
// dont need to specificy local host.... because this is on the server on port 4004
//look at base url in main.js
//getAllMovies is a PROPERTY of movieCtrl
const baseURL = "/api/movies";

// "movieCtrl" can have dot notation becasue it is an object that was exported ... ? nad the var after the dot is the name of a property, which happens to be a function. 
app.get(baseURL, movieCtrl.getAllMovies);
app.post(baseURL, movieCtrl.createMovie);
app.delete(`${baseURL}/:id`, movieCtrl.deleteMovie);
app.put(`${baseURL}/:id`, movieCtrl.updateRating);

app.listen(PORT, () => console.log(`server running on ${PORT}`));
