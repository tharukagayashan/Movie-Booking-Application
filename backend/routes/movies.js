const router = require("express").Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

const Movie = require("../models/Movie");

router.post('/insert', upload.single('poster'), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);

        let movie = new Movie({
            movie_name: req.body.movie_name,
            lead_cast: req.body.lead_cast,
            director_name: req.body.director_name,
            released_date: req.body.released_date,
            ratings: req.body.ratings,
            language: req.body.language,
            description: req.body.description,
            poster: result.secure_url,
            movie_category: req.body.movie_category,
            year: req.body.year,
            available_halls: req.body.available_halls,
            cloudinary_id: result.public_id
        })

        await movie.save();
        res.json(movie);

    } catch (err) {
        console.log(err);
    }
});

//View all the movies
router.route('/').get((req, res) => {

    Movie.find()
        .then((data) => {
            res.json(data);
            //console.log(data);
        })
        .catch((err) => {
            res.json(err);
            console.error(data)
        });
});

//View movie by ID
router.route('/:id').get((req, res) => {

    let id = req.params.id;

    Movie.findById(id)
        .then((data) => {
            res.json(data);
            //console.error(data);
        })
        .catch((err) => {
            res.json(err);
        })

})

//Delete movie
router.route("/delete/:id").delete(async (req, res) => {

    try {
        const movie = await Movie.findById(req.params.id);
        await cloudinary.uploader.destroy(movie.cloudinary_id);


        await movie.remove()
        res.json(movie.movie_name + " Deleted");
    }
    catch (err) {
        res.json(err);
    }
})

//Update movie
router.put('/update/:id', /*upload.single('poster')*/ async (req, res) => {

    try {

        // let movie = await Movie.findById(req.params.id);
        // await cloudinary.uploader.destroy(movie.cloudinary_id);
        // const result = await cloudinary.uploader.upload(req.file.path);

        const data = {
            movie_name: req.body.movie_name || movie.movie_name,
            lead_cast: req.body.lead_cast || movie.lead_cast,
            director_name: req.body.director_name || movie.director_name,
            released_date: req.body.released_date || movie.released_date,
            ratings: req.body.ratings || movie.ratings,
            language: req.body.language || movie.language,
            description: req.body.description || movie.description,
            //poster: result.secure_url || movie.poster,
            movie_category: req.body.movie_category || movie.movie_category,
            year: req.body.year || movie.year,
            available_halls: req.body.available_halls || movie.available_halls,
            //cloudinary_id: result.public_id || movie.cloudinary_id
        };

        movie = await Movie.findByIdAndUpdate(req.params.id, data, { new: true });
        res.json(movie);
    }
    catch (err) {
        console.log(err);
    }
})

module.exports = router;