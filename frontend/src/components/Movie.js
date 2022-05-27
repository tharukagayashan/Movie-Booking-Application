import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/movie_css.css';

function Movie() {

    const [movie, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`/movie/`)
            .then((movies) => {
                setMovies(movies.data);
                console.log(movies.data);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);

    return (
        <div style={{marginTop:"100px"}}>
            {/* Navigation */}
            <div className="fixed-top">
                <header className="topbar">
                    <div className="container">
                        <div className="row">
                            {/* social icon*/}
                            <div className="col-sm-12">
                                <ul className="social-network">
                                    <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-facebook" /></a></li>
                                    <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-twitter" /></a></li>
                                    <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-linkedin" /></a></li>
                                    <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-pinterest" /></a></li>
                                    <li><a className="waves-effect waves-dark" href="#"><i className="fa fa-google-plus" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
                    <div className="container">
                        <a className="navbar-brand" rel="nofollow" target="_blank" href="#" style={{ textTransform: 'uppercase' }}>SL Movie Zone</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active" style={{ marginLeft: "600px" }}>
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/bookings">Bookings</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/cart">Cart</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className='container'>
                <h1 className='text-danger mt-5'><marquee>{"<= Now showing =>"}</marquee></h1><br />
                <div className="row row-cols-4 row-cols-md-4 g-4">
                    {movie.map((val, key) => {
                        return (
                            <div className="col  mb-5">
                                <div className="card text-start">
                                    <img src={val.poster} className="card-img-top" id="poster-img" width="80%" height="80%" />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{val.movie_name} ({val.year})</h5>
                                        <h6>{val.ratings}</h6>
                                        <h6>Starring:{val.lead_cast}</h6>
                                        {/* <h6>Language:{val.language}</h6> */}
                                        <h6>{val.movie_category}</h6>
                                    </div>
                                    <a href={`/profile/${val._id}`}><button className='btn btn-warning w-100'><b>View Profile</b></button></a>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    );
}

export default Movie;