const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

app.use(cors());

const PORT = 8000 || process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL

app.use(express.json());

mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true
}).then(() => {
    console.log("MonogoDB connected!!");
}).catch((err) => {
    console.error(err);
});

//Routes
let movie = require('./routes/movies');

app.use('/movie', movie);

app.get("/", (req, res, next) => {
    res.send("<center><h1>Online movie Reservation Backend API</h1></center>");
    next();
    ;
})

app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
});