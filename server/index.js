const express = require("express");
const movieCtrl = require("./ctrl/movieCtrl");
const cors = require("cors");

//imports always got at the top. Import the contorler file
// "require the path we set up to the contorller file"

const app = express();

app.use(express.json());

const PORT = 4004;

//tell express to accept a get request form /api/movies 
// dont need to specific local host.... because this is on the server on port 4004
//look at base url in main.js
app.get("/api/movies", movieCtrl.getAllMovies);

app.listen(PORT, () => console.log(`server running on ${PORT}`));



//3:03:42