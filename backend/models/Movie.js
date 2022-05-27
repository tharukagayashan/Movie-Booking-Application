const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let movieSchema = new Schema({

    movie_name:{
        type:String,
        required:true
    },
    lead_cast:{
        type:String,
        required:true
    },
    director_name:{
        type:String,
        required:true
    },
    released_date:{
        type:String,
        required:true
    },
    ratings:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    poster:{
        type:String,
        required:true
    },
    movie_category:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    available_halls:{
        type:String,
        required:true
    },
    cloudinary_id:{
        type:String,
        required:true
    }

});

let movie = mongoose.model("movies",movieSchema);
module.exports = movie;